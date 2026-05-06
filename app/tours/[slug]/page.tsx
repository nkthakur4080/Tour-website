import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeaderTopbar from "@/components/HeaderTopbar/HeaderTopbar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { getAllTourSlugs, getTourBySlug } from "@/data/tours";
import "./package-detail.scss";

type TourDetailPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return getAllTourSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: TourDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const tour = getTourBySlug(slug);

    if (!tour) {
        return {
            title: "Tour Not Found | Hi Koraput",
        };
    }

    return {
        title: `${tour.title} | Hi Koraput`,
        description: tour.shortDescription,
    };
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
    const { slug } = await params;
    const tour = getTourBySlug(slug);

    if (!tour) {
        notFound();
    }

    return (
        <>
            <HeaderTopbar />
            <Navbar />

            <main className="package-detail-page">
                <section
                    className="package-hero"
                    style={{
                        backgroundImage: `linear-gradient(rgba(33, 77, 56, 0.76), rgba(33, 77, 56, 0.76)), url("${tour.heroImage}")`,
                    }}
                >
                    <div className="container package-hero__content">
                        <p className="package-hero__eyebrow">Tour Package</p>
                        <h1 className="package-hero__title">{tour.title}</h1>
                        <p className="package-hero__text">{tour.shortDescription}</p>

                        <div className="package-hero__meta">
                            <span>{tour.duration}</span>
                            <span>{tour.location}</span>
                            <span>{tour.price}</span>
                        </div>
                    </div>
                </section>

                <section className="package-summary">
                    <div className="container package-summary__grid">
                        <div className="package-summary__content">
                            <p className="section-kicker">Overview</p>
                            <h2>About This Package</h2>
                            <p>{tour.overview}</p>
                        </div>

                        <aside className="package-summary__card">
                            <p className="package-summary__eyebrow">Tour Details</p>
                            <h3>Quick Facts</h3>
                            <ul>
                                <li>
                                    <strong>Tour Type:</strong> {tour.tourType}
                                </li>
                                <li>
                                    <strong>Duration:</strong> {tour.duration}
                                </li>
                                <li>
                                    <strong>Location:</strong> {tour.location}
                                </li>
                                <li>
                                    <strong>Best For:</strong> {tour.bestFor}
                                </li>
                                <li>
                                    <strong>Starting Price:</strong> {tour.price}
                                </li>
                            </ul>
                            <a href="/contact">Send Inquiry</a>
                        </aside>
                    </div>
                </section>

                <section className="package-highlights">
                    <div className="container">
                        <div className="package-section-heading">
                            <p className="section-kicker">Highlights</p>
                            <h2>What You Can Expect</h2>
                        </div>

                        <div className="package-highlights__grid">
                            {tour.highlights.map((highlight) => (
                                <article key={highlight} className="highlight-card">
                                    <p>{highlight}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="package-itinerary">
                    <div className="container">
                        <div className="package-section-heading">
                            <p className="section-kicker">Itinerary</p>
                            <h2>Day-wise Plan</h2>
                        </div>

                        <div className="package-itinerary__list">
                            {tour.itinerary.map((item) => (
                                <article key={item.day} className="itinerary-card">
                                    <div className="itinerary-card__day">{item.day}</div>
                                    <div className="itinerary-card__content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="package-inclusions">
                    <div className="container package-inclusions__grid">
                        <div className="inclusion-card">
                            <p className="section-kicker">Included</p>
                            <h2>What&apos;s Included</h2>
                            <ul>
                                {tour.included.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="inclusion-card inclusion-card--muted">
                            <p className="section-kicker">Excluded</p>
                            <h2>What&apos;s Not Included</h2>
                            <ul>
                                {tour.excluded.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="package-gallery">
                    <div className="container">
                        <div className="package-section-heading">
                            <p className="section-kicker">Gallery</p>
                            <h2>Tour Visuals</h2>
                        </div>

                        <div className="package-gallery__grid">
                            {tour.gallery.map((image, index) => (
                                <div key={`${tour.slug}-${index + 1}`} className="gallery-card">
                                    <img src={image} alt={`${tour.title} view ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="package-pricing">
                    <div className="container">
                        <div className="package-pricing__heading">
                            <p className="section-kicker">Choose Your Group Size</p>
                            <h2>Better prices as your group grows</h2>
                        </div>

                        <div className="package-pricing__grid">
                            {tour.groupPricing.map((item, index) => (
                                <article
                                    key={item.groupSize}
                                    className={`pricing-card ${index === 1 ? "pricing-card--featured" : ""}`}
                                >
                                    {index === 1 ? (
                                        <span className="pricing-card__badge">Most Popular</span>
                                    ) : null}

                                    <div className="pricing-card__icon" aria-hidden="true">
                                        {index === 0 ? "2" : index === 1 ? "4" : "6"}
                                    </div>

                                    <h3>{item.groupSize}</h3>
                                    <p className="pricing-card__tag">
                                        {index === 0
                                            ? "Premium Experience"
                                            : index === 1
                                              ? "Best Value"
                                              : "Maximum Savings"}
                                    </p>

                                    <div className="pricing-card__price">
                                        <span>{item.price}</span>
                                        <small>{item.note || "per person"}</small>
                                    </div>

                                    <p className="pricing-card__saving">
                                        {index === 0
                                            ? "Best for a private, more personal trip."
                                            : index === 1
                                              ? "Balanced price and comfort for small groups."
                                              : "Best value for larger groups and shared travel."}
                                    </p>

                                    <a href="/contact" className="pricing-card__button">
                                        Book Now
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="package-cta">
                    <div className="container package-cta__inner">
                        <div>
                            <p className="section-kicker">Ready to Book?</p>
                            <h2>Let&apos;s Plan Your Koraput Trip</h2>
                            <p>
                                Share your dates, travel group, and preferences and we will help you
                                shape the right package.
                            </p>
                        </div>

                        <div className="package-cta__actions">
                            <a href="/contact" className="package-cta__button">
                                Send an Inquiry
                            </a>
                            <a href="/tours" className="package-cta__link">
                                Back to All Packages
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
