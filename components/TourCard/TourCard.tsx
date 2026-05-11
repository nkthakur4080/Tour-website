import Link from "next/link";
import "./TourCard.scss";

type Props = {
    title: string;
    image: string;
    price: string;
    duration: string;
    description: string;
    href?: string;
    buttonLabel?: string;
};

export default function TourCard({
    title,
    image,
    price,
    duration,
    description,
    href = "/contact",
    buttonLabel = "View Details",
}: Props) {
    return (
        <article className="tour-card">
            <img src={image} alt={title} />
            <div className="tour-card__body">
                <span className="tour-card__price">{price}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tour-card__footer">
                    <span>{duration}</span>
                    <Link href={href}>{buttonLabel}</Link>
                </div>
            </div>
        </article>
    );
}
