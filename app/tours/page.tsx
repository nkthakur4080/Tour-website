import HeaderTopbar from "@/components/HeaderTopbar/HeaderTopbar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import TourCard from "@/components/TourCard/TourCard";
import "./tours.scss";

const tours = [
    {
        title: "3N4D Nature Unbound",
        image: "/product-img/card-1.jpeg",
        price: "Rs. 7500",
        duration: "3 Nights 4 Days",
        description: "Explore waterfalls, hills, caves, tribal culture, and scenic valleys.",
    },
    {
        title: "1N2D Serene Splendors",
        image: "/product-img/card-2.jpeg",
        price: "Rs. 3500",
        duration: "1 Night 2 Days",
        description: "A short Koraput getaway with peaceful views, temples, and local charm.",
    },
    {
        title: "4N5D Koraput Expedition",
        image: "/product-img/card-3.jpeg",
        price: "Rs. 9000",
        duration: "4 Nights 5 Days",
        description: "A complete nature-focused itinerary through hidden gems and local stays.",
    },
    {
        title: "2N3D Waterfalls Trail",
        image: "/product-img/card-4.jpeg",
        price: "Rs. 5200",
        duration: "2 Nights 3 Days",
        description: "A refreshing circuit covering famous waterfalls, viewpoints, and forest roads.",
    },
    {
        title: "Adventure Weekend Escape",
        image: "/product-img/card-5.jpeg",
        price: "Rs. 4200",
        duration: "2 Days 1 Night",
        description: "Camping, bonfire, and light trekking for travelers looking for a quick adventure.",
    },
    {
        title: "Culture and Nature Retreat",
        image: "/product-img/card-6.jpeg",
        price: "Rs. 6800",
        duration: "3 Days 2 Nights",
        description: "A slower trip combining scenic landscapes with authentic local experiences.",
    },
];

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
                                    key={tour.title}
                                    title={tour.title}
                                    image={tour.image}
                                    price={tour.price}
                                    duration={tour.duration}
                                    description={tour.description}
                                    href="/contact"
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
