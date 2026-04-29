import HeaderTopbar from "@/components/HeaderTopbar/HeaderTopbar";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import TourCard from "@/components/TourCard/TourCard";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import Footer from "@/components/Footer/Footer";

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
            <ExperienceCard title="Camping" image="/product-img/card-1.jpeg" />
            <ExperienceCard title="Trekking" image="/product-img/card-1.jpeg" />
            <ExperienceCard title="Parasailing" image="/product-img/card-1.jpeg" />
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
            <TourCard
              title="3N4D Nature Unbound"
              image="/product-img/card-1.jpeg"
              price="₹7500"
              duration="3 Nights 4 Days"
              description="Explore waterfalls, hills, caves, and cultural destinations."
            />
            <TourCard
              title="1N2D Serene Splendors"
              image="/product-img/card-1.jpeg"
              price="₹3500"
              duration="1 Night 2 Days"
              description="A quick Koraput getaway filled with nature and spirituality."
            />
            <TourCard
              title="4N5D Koraput Expedition"
              image="/product-img/card-1.jpeg"
              price="₹9000"
              duration="4 Nights 5 Days"
              description="A longer journey through scenic landscapes and hidden gems."
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <SectionTitle title="Client Reviews" subtitle="Explore a different way to travel" />

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
