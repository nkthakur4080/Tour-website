import Link from "next/link";
import HeaderTopbar from "@/components/HeaderTopbar/HeaderTopbar";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import FaqSection from "@/components/FaqSection/FaqSection";
import TourCard from "@/components/TourCard/TourCard";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import Footer from "@/components/Footer/Footer";
import { faqs } from "@/data/faqs";
import { tours } from "@/data/tours";
import "./home.scss";

const places = [
    {
        title: "Deomali",
        description: "Odisha's highest peak with stunning views",
        image: "/product-img/card-4.jpeg",
    },
    {
        title: "Duduma Waterfall",
        description: "One of the tallest waterfalls in Odisha",
        image: "/product-img/card-1.jpeg",
    },
    {
        title: "Gupteswar Cave",
        description: "Ancient cave with spiritual significance",
        image: "/product-img/card-5.jpeg",
    },
    {
        title: "Coffee Plantations",
        description: "Scenic coffee gardens in Koraput",
        image: "/product-img/card-6.jpeg",
    },
    {
        title: "Jagannath Temple",
        description: "Famous temple with spiritual vibes",
        image: "/product-img/card-2.jpeg",
    },
    {
        title: "Kolab Reservoir",
        description: "Serene waters and relaxing landscapes",
        image: "/hero.jpeg",
    },
];

export default function HomePage() {
    return (
        <>
            <HeaderTopbar />
            <Navbar />
            <Hero />

            <section>
                <div className="container">
                    <SectionTitle
                        title="Adventure & Nature Experiences in Koraput"
                    />

                    <div className="experience-grid">
                        <ExperienceCard
                            title="Camping"
                            image="/product-img/camping.jpg"
                            description="Camp under the stars in scenic locations"
                        />
                        <ExperienceCard
                            title="Trekking"
                            image="/product-img/treking.jpg"
                            description="Explore thrilling trails and mountain views"
                        />
                        <ExperienceCard
                            title="Parasailing"
                            image="/product-img/parasailing.jpg"
                            description="Fly high above the beautiful landscapes"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <SectionTitle title="Best Koraput Tour Packages" />

                    <div className="experience-grid">
                        {tours.slice(0, 3).map((tour) => (
                            <TourCard
                                key={tour.id}
                                title={tour.title}
                                image={tour.heroImage}
                                price={tour.price}
                                duration={tour.duration}
                                description={tour.shortDescription}
                                href={`/tours/${tour.slug}`}
                                buttonLabel="View Itinerary"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="home-about">
                <div className="container home-about__grid">
                    <div className="home-about__image">
                        <img src="/hero.jpeg" alt="Koraput landscape" />
                    </div>

                    <div className="home-about__content">
                        <p className="home-about__eyebrow">ABOUT KORAPUT TOURISM</p>
                        <h2>Explore Koraput Tourism</h2>
                        <p>
                            Koraput is one of Odisha's most scenic travel destinations
                            known for its valleys, waterfalls, tribal culture, forests,
                            coffee plantations and hilltop landscapes. From Deomali hills
                            and Duduma waterfalls to tribal markets and eco-tourism
                            experiences, Koraput offers a unique blend of adventure,
                            nature and culture. Hi Koraput creates curated Koraput tour
                            packages for couples, families, groups and explorers looking
                            for authentic travel experiences.
                        </p>
                        <Link href="/about" className="home-button">
                            Read Travel Guide
                        </Link>
                    </div>
                </div>
            </section>

            <section className="places-section">
                <div className="container">
                    <SectionTitle title="Top Places to Visit in Koraput" />

                    <div className="places-grid">
                        {places.map((place) => (
                            <article key={place.title} className="place-card">
                                <img src={place.image} alt={place.title} />
                                <div className="place-card__body">
                                    <h3>{place.title}</h3>
                                    <p>{place.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <SectionTitle title="What Our Travelers Say" />

                    <div className="experience-grid">
                        <TestimonialCard
                            name="Prajna Paramita Rout"
                            text="Our camping experience in Koraput was unforgettable. Great hospitality and beautiful locations!"
                        />
                        <TestimonialCard
                            name="R Ranjan Kumar Sahoo"
                            text="Well planned trip, excellent stay and very supportive team. Highly recommended!"
                        />
                        <TestimonialCard
                            name="Mousami Mohapatra"
                            text="Amazing waterfalls, green valleys and peaceful environment. Will visit again!"
                        />
                    </div>
                </div>
            </section>

            <FaqSection
                title="Frequently Asked Questions"
                subtitle={null}
                initiallyOpenFirst={false}
                items={faqs.slice(0, 8)}
            />

            <section className="home-cta">
                <div className="container">
                    <div className="home-cta__card">
                        <div>
                            <h2>Book Your Koraput Tour Package</h2>
                            <p>
                                Plan your dream trip to Koraput with locals who know it
                                best.
                            </p>
                        </div>
                        <Link href="/tours" className="home-button">
                            Explore Tour Packages
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
