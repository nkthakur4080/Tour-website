import "./Hero.scss";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__overlay">
                <div className="container hero__content">
                    <p className="hero__eyebrow">Camp Adventures</p>
                    <h1>Hi Koraput</h1>
                    <p className="hero__tagline">Explore the unexplored</p>
                </div>
            </div>
        </section>
    );
}
