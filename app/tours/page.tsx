import HeaderTopbar from "@/components/HeaderTopbar/HeaderTopbar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import TourCard from "@/components/TourCard/TourCard";
import { tours } from "@/data/tours";
import "./tours.scss";

const highlights = [
    "Multi-day and short-stay tour packages",
    "Adventure activities and nature experiences",
    "Local planning support and guided coordination",
];

export default function ToursPage() {
    return (
        <>
            <HeaderTopbar />
            <Navbar />

            <main className="tours-page">
                <section className="page-hero page-hero--tours">
                    <div className="container">
                        <p className="page-hero__eyebrow">Tour Packages</p>
                        <h1 className="page-hero__title">Travel Koraput Your Way</h1>
                        <p className="page-hero__text">
                            Choose from curated journeys built around nature, local culture,
                            adventure, and quiet escapes across Koraput.
                        </p>
                    </div>
                </section>

                <section className="tour-overview">
                    <div className="container tour-overview__grid">
                        <div className="tour-overview__content">
                            <p className="section-kicker">Plan Your Trip</p>
                            <h2>Packages Designed for Different Travelers</h2>
                            <p>
                                Our tours are designed for couples, families, groups, and solo
                                travelers who want a simple way to explore Koraput with confidence.
                            </p>
                            <ul className="tour-overview__list">
                                {highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="tour-overview__card">
                            <h3>Need a Custom Plan?</h3>
                            <p>
                                We can help tailor a trip based on your budget, duration, and
                                preferred activities.
                            </p>
                            <a href="/contact">Send an Inquiry</a>
                        </div>
                    </div>
                </section>

                <section className="tour-listing">
                    <div className="container">
                        <SectionTitle
                            title="Featured Tour Packages"
                            subtitle="Explore a different way to travel through Koraput"
                        />

                        <div className="tour-listing__grid">
                            {tours.map((tour) => (
                                <TourCard
                                    key={tour.id}
                                    title={tour.title}
                                    image={tour.heroImage}
                                    price={tour.price}
                                    duration={tour.duration}
                                    description={tour.shortDescription}
                                    href={`/tours/${tour.slug}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="tour-process">
                    <div className="container">
                        <SectionTitle
                            title="How Booking Works"
                            subtitle="A simple process from inquiry to departure"
                        />

                        <div className="tour-process__grid">
                            <article className="process-card">
                                <span>01</span>
                                <h3>Choose a Package</h3>
                                <p>Pick a tour that matches the number of days and experiences you want.</p>
                            </article>
                            <article className="process-card">
                                <span>02</span>
                                <h3>Send Your Inquiry</h3>
                                <p>Share your dates, group size, and travel preferences with us.</p>
                            </article>
                            <article className="process-card">
                                <span>03</span>
                                <h3>Confirm the Trip</h3>
                                <p>We help finalize the itinerary, stay details, and local arrangements.</p>
                            </article>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
