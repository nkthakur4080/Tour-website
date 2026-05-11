import HeaderTopbar from "@/components/HeaderTopbar/HeaderTopbar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ContactForm from "@/components/ContactForm/ContactForm";
import FaqSection from "@/components/FaqSection/FaqSection";
import "./contact.scss";

export default function ContactPage() {
    return (
        <>
            <HeaderTopbar />
            <Navbar />

            <main className="contact-page">
                <section className="page-hero page-hero--contact">
                    <div className="container">
                        <p className="page-hero__eyebrow">Contact Us</p>
                        <h1 className="page-hero__title">Let&apos;s Plan Your Koraput Journey</h1>
                        <p className="page-hero__text">
                            Share your travel dates, group size, and preferred experiences and we
                            will help you plan a smooth trip.
                        </p>
                    </div>
                </section>

                <section className="contact-layout">
                    <div className="container contact-layout__grid">
                        <div className="contact-details">
                            <p className="section-kicker">Get in Touch</p>
                            <h2>Talk to Us About Your Travel Plan</h2>
                            <p>
                                Reach out for bookings, custom itineraries, stay planning, and local
                                trip guidance around Koraput.
                            </p>

                            <div className="contact-details__list">
                                <div className="contact-info-card">
                                    <h3>Phone</h3>
                                    <p>09686848817</p>
                                </div>
                                <div className="contact-info-card">
                                    <h3>Email</h3>
                                    <p>info@hikoraput.com</p>
                                </div>
                                <div className="contact-info-card">
                                    <h3>Location</h3>
                                    <p>Koraput, Odisha, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-card">
                            <h3>Send an Inquiry</h3>
                            <ContactForm />
                        </div>
                    </div>
                </section>

                <FaqSection
                    title="A few quick answers before you reach out"
                    subtitle="Frequently Asked Questions"
                />
            </main>

            <Footer />
        </>
    );
}
