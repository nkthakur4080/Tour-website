import "./ExperienceCard.scss";

type Props = {
    title: string;
    image: string;
};


export default function ExperienceCard({ title, image }: Props) {
    return (
        <div className="experience-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}