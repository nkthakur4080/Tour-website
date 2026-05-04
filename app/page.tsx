import HeaderTopbar from "@/components/HeaderTopbar/HeaderTopbar";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import TourCard from "@/components/TourCard/TourCard";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import Footer from "@/components/Footer/Footer";
import { tours } from "@/data/tours";

export default function HomePage() {
    return (
        <>
            <HeaderTopbar />
            <Navbar />
            <Hero />

            <section>
                <div className="container">
                    <SectionTitle
                        title="Most popular Experiences"
                        subtitle="Explore a different way to travel"
                    />

                    <div className="experience-grid">
                        <ExperienceCard title="Camping" image="/product-img/camping.jpg" />
                        <ExperienceCard title="Trekking" image="/product-img/treking.jpg" />
                        <ExperienceCard title="Parasailing" image="/product-img/parasailing.jpg" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <SectionTitle
                        title="Top Tour Packages"
                        subtitle="Explore a different way to travel"
                    />

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
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <SectionTitle
                        title="Client Reviews"
                        subtitle="Explore a different way to travel"
                    />

                    <div className="experience-grid">
                        <TestimonialCard
                            name="Prajna Paramita Rout"
                            text="Wonderful service and beautiful memories."
                        />
                        <TestimonialCard
                            name="R Ranjan Kumar Sahoo"
                            text="Camping experience was smooth and unforgettable."
                        />
                        <TestimonialCard
                            name="Mousami Mohapatra"
                            text="Very well planned trip and great hospitality."
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
