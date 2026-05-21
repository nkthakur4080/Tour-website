import HeaderTopbar from "@/components/HeaderTopbar/HeaderTopbar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./privacy-policy.scss";

const sections = [
    {
        title: "1. Overview",
        paragraphs: [
            "Hi Koraput Hospitality Pvt. Ltd. respects your privacy and is committed to protecting the information you share with us through this website.",
            "This Privacy Policy is written for our travel and inquiry website and is informed by the public-facing privacy-policy structure commonly used on Indian government websites, especially the Government of India website-policy guidance and National Government Services Portal privacy statements.",
        ],
    },
    {
        title: "2. Personal Information We Collect",
        paragraphs: [
            "As a general rule, you can visit this website without telling us who you are or revealing personal information about yourself.",
            "We collect personal information only when you choose to provide it to us, for example when you fill out our contact or inquiry form. This information may include your name, email address, phone number, travel preferences, and any details you voluntarily share with us in your message.",
        ],
    },
    {
        title: "3. Technical Information Collected Automatically",
        paragraphs: [
            "When you browse this website, we may automatically collect limited technical information such as your IP address, browser type, device type, operating system, date and time of visit, pages visited, and the referring website address.",
            "This information is used for website administration, security monitoring, analytics, and improving user experience. We do not ordinarily attempt to identify individual visitors from this technical information, except where required for security investigation, legal compliance, or prevention of misuse.",
        ],
    },
    {
        title: "4. How We Use Your Information",
        paragraphs: [
            "We use the information you provide only for legitimate business purposes related to our travel services. This includes responding to inquiries, planning itineraries, sharing tour details, coordinating bookings, providing customer support, and improving our services.",
            "We do not sell your personally identifiable information to third parties.",
        ],
    },
    {
        title: "5. Cookies and Similar Technologies",
        paragraphs: [
            "This website may use cookies or similar technologies to improve functionality, remember user preferences, measure traffic, and understand how visitors use the site.",
            "You may choose to disable cookies through your browser settings, but some parts of the website may not function as intended if cookies are disabled.",
        ],
    },
    {
        title: "6. Sharing and Disclosure",
        paragraphs: [
            "We may share your information only when it is necessary to respond to your request, provide a requested service, work with a booking or travel-support partner involved in your trip, comply with applicable law, or protect our legal rights and website security.",
            "Where service providers assist us in operating the website or handling inquiries, they are expected to use the information only for the relevant service purpose and with appropriate confidentiality and security measures.",
        ],
    },
    {
        title: "7. Data Security",
        paragraphs: [
            "We take reasonable administrative, technical, and organizational measures to protect information against unauthorized access, misuse, disclosure, alteration, or destruction.",
            "However, no method of internet transmission or electronic storage can be guaranteed to be completely secure, and therefore absolute security cannot be promised.",
        ],
    },
    {
        title: "8. External Links",
        paragraphs: [
            "This website may contain links to external websites for your convenience and information. Once you leave our website, you are subject to the privacy and security practices of the external website owner.",
            "We are not responsible for the privacy practices, content, or security of third-party websites.",
        ],
    },
    {
        title: "9. Retention of Information",
        paragraphs: [
            "We retain inquiry and customer communication data only for as long as reasonably necessary to respond to your request, provide travel services, maintain business records, resolve disputes, and meet legal or operational requirements.",
        ],
    },
    {
        title: "10. Your Choices",
        paragraphs: [
            "If you do not want to share personal information with us through the website, please do not submit the online inquiry form. You may instead contact us directly by phone or email.",
            "If you want us to review or update information you have shared through the website, you can write to us at info@hikoraput.com or support@hikoraput.com.",
        ],
    },
    {
        title: "11. Changes to This Policy",
        paragraphs: [
            "We may update this Privacy Policy from time to time to reflect changes in our website, services, legal obligations, or internal practices. The updated version will be posted on this page with the revised effective date.",
        ],
    },
    {
        title: "12. Contact",
        paragraphs: [
            "If you have questions about this Privacy Policy or how we handle website inquiries, you may contact us at info@hikoraput.com or support@hikoraput.com, or call us at 09686848817.",
        ],
    },
];

export default function PrivacyPolicyPage() {
    return (
        <>
            <HeaderTopbar />
            <Navbar />

            <main className="privacy-page">
                <section className="privacy-hero">
                    <div className="container">
                        <p className="privacy-hero__eyebrow">Website Policy</p>
                        <h1>Privacy Policy</h1>
                        <p>Effective date: May 21, 2026</p>
                    </div>
                </section>

                <section className="privacy-content">
                    <div className="container">
                        <div className="privacy-intro">
                            <p>
                                This policy applies to the Hi Koraput website and explains how
                                we collect, use, protect, and disclose information when you use
                                our website or submit a travel inquiry.
                            </p>
                        </div>

                        <div className="privacy-sections">
                            {sections.map((section) => (
                                <article key={section.title} className="privacy-card">
                                    <h2>{section.title}</h2>
                                    {section.paragraphs.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
