import "./ExperienceCard.scss";

type Props = {
    title: string;
    image: string;
    description?: string;
};


export default function ExperienceCard({ title, image, description }: Props) {
    return (
        <div className="experience-card">
            <img src={image} alt={title} />
            <div className="experience-card__body">
                <h3>{title}</h3>
                {description ? <p>{description}</p> : null}
            </div>
        </div>
    );
}
