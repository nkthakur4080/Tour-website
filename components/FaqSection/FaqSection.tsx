import { faqs, type FaqItem } from "@/data/faqs";
import "./FaqSection.scss";

type Props = {
    title?: string;
    subtitle?: string | null;
    initiallyOpenFirst?: boolean;
    items?: FaqItem[];
};

export default function FaqSection({
    title = "Everything you may want to know before planning your Koraput trip",
    subtitle = "Frequently Asked Questions",
    initiallyOpenFirst = true,
    items = faqs,
}: Props) {
    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-section__heading">
                    {subtitle ? <p className="faq-section__eyebrow">{subtitle}</p> : null}
                    <h2>{title}</h2>
                </div>

                <div className="faq-section__list">
                    {items.map((faq, index) => (
                        <details
                            key={faq.question}
                            className="faq-item"
                            open={initiallyOpenFirst && index === 0}
                        >
                            <summary>
                                <span>{faq.question}</span>
                            </summary>
                            <div className="faq-item__content">
                                <p>{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
