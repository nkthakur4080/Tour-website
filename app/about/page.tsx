import HeaderTopbar from "@/components/HeaderTopbar/HeaderTopbar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./about.scss";

export default function AboutPage() {
    return (
        <>
            <HeaderTopbar />
            <Navbar />

            <main className="about-page">
                <section className="about-hero">
                    <div className="container">
                        <p className="about-hero__eyebrow">About Us</p>
                        <h1 className="about-hero__title">Discover Koraput With Local Experts</h1>
                        <p className="about-hero__text">
                            We create memorable travel experiences across Koraput with curated tours,
                            local guidance, nature adventures, and comfortable stays.
                        </p>
                    </div>
                </section>

                <section className="about-intro">
                    <div className="container about-intro__grid">
                        <div className="about-intro__content">
                            <p className="section-kicker">Who We Are</p>
                            <h2>Your Travel Partner for Koraput</h2>
                            <p>
                                Hi Koraput is inspired by the natural beauty, tribal culture, waterfalls,
                                hills, caves, and peaceful landscapes of Koraput. We help travelers explore
                                this region with thoughtfully planned experiences.
                            </p>
                            <p>
                                Whether someone wants a short weekend trip, a scenic nature escape, or an
                                adventure-filled itinerary, we make the journey smooth and enjoyable.
                            </p>
                        </div>

                        <div className="about-intro__image">
                            <img src="/about-koraput.jpg" alt="Koraput landscape" />
                        </div>
                    </div>
                </section>

                <section className="why-us">
                    <div className="container">
                        <div className="section-heading">
                            <p className="section-kicker">Why Choose Us</p>
                            <h2>We Make Travel Simple and Memorable</h2>
                        </div>

                        <div className="why-us__grid">
                            <article className="why-card">
                                <h3>Local Knowledge</h3>
                                <p>
                                    We understand Koraput&apos;s destinations, routes, and hidden gems better
                                    than generic travel operators.
                                </p>
                            </article>

                            <article className="why-card">
                                <h3>Curated Experiences</h3>
                                <p>
                                    From trekking and camping to family trips and short escapes, we organize
                                    experiences that fit different travelers.
                                </p>
                            </article>

                            <article className="why-card">
                                <h3>Comfort and Support</h3>
                                <p>
                                    We help with planning, stay coordination, transport guidance, and overall
                                    trip convenience.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="mission">
                    <div className="container mission__grid">
                        <div className="mission__image">
                            <img src="/mission.jpg" alt="Travelers enjoying Koraput" />
                        </div>

                        <div className="mission__content">
                            <p className="section-kicker">Our Mission</p>
                            <h2>To Show the Beauty of the Unexplored</h2>
                            <p>
                                Our goal is to make Koraput more accessible to travelers who want authentic,
                                scenic, and culturally rich experiences.
                            </p>
                            <p>
                                We believe travel should feel inspiring, safe, and easy to plan. That&apos;s
                                why we focus on thoughtful itineraries and a warm local touch.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="stats">
                    <div className="container stats__grid">
                        <div className="stat-box">
                            <h3>50+</h3>
                            <p>Tours Organized</p>
                        </div>
                        <div className="stat-box">
                            <h3>100+</h3>
                            <p>Happy Travelers</p>
                        </div>
                        <div className="stat-box">
                            <h3>20+</h3>
                            <p>Top Destinations</p>
                        </div>
                        <div className="stat-box">
                            <h3>3+</h3>
                            <p>Adventure Activities</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
