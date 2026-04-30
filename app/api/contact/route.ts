import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

type ContactPayload = {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
};

function validatePayload(payload: ContactPayload) {
    const name = payload.name?.trim() || "";
    const email = payload.email?.trim() || "";
    const phone = payload.phone?.trim() || "";
    const message = payload.message?.trim() || "";

    if (!name || !email || !phone || !message) {
        return { error: "Please fill in all fields." };
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return { error: "Please enter a valid email address." };
    }

    return {
        data: {
            name,
            email,
            phone,
            message,
        },
    };
}

function buildEmailContent({
    name,
    email,
    phone,
    message,
}: Required<ContactPayload>) {
    const subject = `New Koraput inquiry from ${name}`;
    const text = [
        "New travel inquiry received.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Trip Details:",
        message,
    ].join("\n");

    const html = `
        <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #1e1e1e;">
            <h2 style="margin-bottom: 16px;">New travel inquiry received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Trip Details:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
        </div>
    `;

    return { subject, text, html };
}

async function sendWithResend({
    to,
    from,
    replyTo,
    subject,
    text,
    html,
}: {
    to: string;
    from: string;
    replyTo: string;
    subject: string;
    text: string;
    html: string;
}) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        throw new Error("RESEND_API_KEY is missing.");
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
        from,
        to,
        replyTo,
        subject,
        text,
        html,
    });

    if (result.error) {
        throw new Error(result.error.message || "Resend could not send the email.");
    }
}

async function sendWithSmtp({
    to,
    from,
    replyTo,
    subject,
    text,
    html,
}: {
    to: string;
    from: string;
    replyTo: string;
    subject: string;
    text: string;
    html: string;
}) {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
        throw new Error("SMTP configuration is incomplete.");
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
            user,
            pass,
        },
    });

    await transporter.sendMail({
        from,
        to,
        replyTo,
        subject,
        text,
        html,
    });
}

export async function POST(request: Request) {
    try {
        const payload = (await request.json()) as ContactPayload;
        const validation = validatePayload(payload);

        if ("error" in validation) {
            return NextResponse.json({ message: validation.error }, { status: 400 });
        }

        const { name, email, phone, message } = validation.data;
        const to = process.env.CONTACT_TO_EMAIL;
        const from = process.env.CONTACT_FROM_EMAIL;
        const provider = process.env.EMAIL_PROVIDER || "auto";

        if (!to || !from) {
            return NextResponse.json(
                {
                    message:
                        "Server email settings are not configured yet. Add CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.",
                },
                { status: 500 }
            );
        }

        const emailContent = buildEmailContent({ name, email, phone, message });

        if (provider === "resend") {
            await sendWithResend({
                to,
                from,
                replyTo: email,
                ...emailContent,
            });
        } else if (provider === "smtp") {
            await sendWithSmtp({
                to,
                from,
                replyTo: email,
                ...emailContent,
            });
        } else if (process.env.RESEND_API_KEY) {
            await sendWithResend({
                to,
                from,
                replyTo: email,
                ...emailContent,
            });
        } else if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            await sendWithSmtp({
                to,
                from,
                replyTo: email,
                ...emailContent,
            });
        } else {
            return NextResponse.json(
                {
                    message:
                        "No email provider is configured. Set Resend or SMTP environment variables first.",
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            message: "Thanks. Your inquiry was sent successfully.",
        });
    } catch (error) {
        console.error("Contact form error:", error);

        const message =
            error instanceof Error
                ? error.message
                : "We could not send your inquiry right now. Please try again later.";

        return NextResponse.json(
            {
                message,
            },
            { status: 500 }
        );
    }
}
