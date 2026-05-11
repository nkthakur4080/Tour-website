import Link from "next/link";
import "./Hero.scss";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__overlay">
                <div className="container hero__content">
                    <p className="hero__eyebrow">DISCOVER THE HIDDEN SOUL OF ODISHA</p>
                    <h1>Koraput Tour Package</h1>
                    <p className="hero__tagline">
                        Explore waterfalls, valleys, tribal culture, camping,
                        trekking and curated travel experiences across Koraput.
                    </p>
                    <div className="hero__actions">
                        <Link href="/tours" className="hero__button hero__button--primary">
                            Explore Tour Packages
                        </Link>
                        <Link href="/contact" className="hero__button hero__button--secondary">
                            Plan Your Trip
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
