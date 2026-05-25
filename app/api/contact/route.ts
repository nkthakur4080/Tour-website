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
    const subject = `New Koraput inquiry from ${name} (${email})`;
    const text = [
        "New Koraput travel inquiry received.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Trip Details:",
        message,
    ].join("\n");

    const html = `
        <div style="margin:0; padding:24px 0; background-color:#f6f8f6; font-family:Arial, Helvetica, sans-serif; color:#1e1e1e;">
            <div style="max-width:640px; margin:0 auto; background-color:#ffffff; border:1px solid #e5e5e5; border-radius:14px; overflow:hidden; box-shadow:0 8px 24px rgba(0, 0, 0, 0.06);">
                <div style="background:linear-gradient(135deg, #2f6d4f 0%, #214d38 100%); padding:28px 32px; color:#ffffff;">
                    <p style="margin:0 0 8px; font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#d6a84f; font-weight:700;">
                        Hi Koraput Inquiry
                    </p>
                    <h2 style="margin:0; font-size:28px; line-height:1.3; color:#ffffff;">
                        New Koraput travel inquiry received
                    </h2>
                </div>

                <div style="padding:28px 32px;">
                    <p style="margin:0 0 24px; font-size:16px; line-height:1.7; color:#555555;">
                        A new traveler has submitted an inquiry through the website. Here are the details:
                    </p>

                    <div style="display:grid; gap:14px; margin-bottom:24px;">
                        <div style="padding:14px 16px; background-color:#f7f6f2; border:1px solid #e5e5e5; border-radius:10px;">
                            <p style="margin:0 0 4px; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.8px; color:#2f6d4f;">Full Name</p>
                            <p style="margin:0; font-size:16px; color:#1e1e1e;">${name}</p>
                        </div>

                        <div style="padding:14px 16px; background-color:#f7f6f2; border:1px solid #e5e5e5; border-radius:10px;">
                            <p style="margin:0 0 4px; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.8px; color:#2f6d4f;">Email Address</p>
                            <p style="margin:0; font-size:16px; color:#1e1e1e;">
                                <a href="mailto:${email}" style="color:#1e1e1e; text-decoration:none;">${email}</a>
                            </p>
                        </div>

                        <div style="padding:14px 16px; background-color:#f7f6f2; border:1px solid #e5e5e5; border-radius:10px;">
                            <p style="margin:0 0 4px; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.8px; color:#2f6d4f;">Phone Number</p>
                            <p style="margin:0; font-size:16px; color:#1e1e1e;">
                                <a href="tel:${phone}" style="color:#1e1e1e; text-decoration:none;">${phone}</a>
                            </p>
                        </div>
                    </div>

                    <div style="padding:18px 20px; background-color:#ffffff; border:1px solid #dfe7df; border-left:4px solid #2f6d4f; border-radius:10px;">
                        <p style="margin:0 0 10px; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.8px; color:#2f6d4f;">
                            Trip Details
                        </p>
                        <p style="margin:0; white-space:pre-line; font-size:16px; line-height:1.8; color:#555555;">${message}</p>
                    </div>
                </div>
            </div>
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
    to: string[];
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

        const recipients = to
            .split(",")
            .map((value) => value.trim())
            .filter(Boolean);

        if (recipients.length === 0) {
            return NextResponse.json(
                {
                    message: "Please add at least one recipient email in CONTACT_TO_EMAIL.",
                },
                { status: 500 }
            );
        }

        const emailContent = buildEmailContent({ name, email, phone, message });

        if (provider === "resend") {
            await sendWithResend({
                to: recipients,
                from,
                replyTo: email,
                ...emailContent,
            });
        } else if (provider === "smtp") {
            await sendWithSmtp({
                to: recipients.join(", "),
                from,
                replyTo: email,
                ...emailContent,
            });
        } else if (process.env.RESEND_API_KEY) {
            await sendWithResend({
                to: recipients,
                from,
                replyTo: email,
                ...emailContent,
            });
        } else if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            await sendWithSmtp({
                to: recipients.join(", "),
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
