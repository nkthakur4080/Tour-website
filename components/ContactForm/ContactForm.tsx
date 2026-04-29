"use client";

import { FormEvent, useState } from "react";

type FormState = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const initialFormState: FormState = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

export default function ContactForm() {
    const [formData, setFormData] = useState<FormState>(initialFormState);
    const [status, setStatus] = useState<{
        type: "idle" | "success" | "error";
        message: string;
    }>({
        type: "idle",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "idle", message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = (await response.json()) as { message?: string };

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong while sending your inquiry.");
            }

            setStatus({
                type: "success",
                message: data.message || "Your inquiry has been sent successfully.",
            });
            setFormData(initialFormState);
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "We could not send your inquiry right now. Please try again.";

            setStatus({
                type: "error",
                message,
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(event) =>
                        setFormData((current) => ({ ...current, name: event.target.value }))
                    }
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(event) =>
                        setFormData((current) => ({ ...current, email: event.target.value }))
                    }
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(event) =>
                        setFormData((current) => ({ ...current, phone: event.target.value }))
                    }
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Trip Details</label>
                <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your dates, group size, and preferred activities"
                    value={formData.message}
                    onChange={(event) =>
                        setFormData((current) => ({ ...current, message: event.target.value }))
                    }
                    required
                />
            </div>

            {status.message ? (
                <p
                    className={`form-status ${
                        status.type === "success" ? "form-status--success" : "form-status--error"
                    }`}
                    aria-live="polite"
                >
                    {status.message}
                </p>
            ) : null}

            <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}
