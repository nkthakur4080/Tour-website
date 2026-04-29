import "./TestimonialCard.scss";

type Props = {
    name: string;
    text: string;
};

export default function TestimonialCard({ name, text }: Props) {
    return (
        <div className="testimonial-card">
            <p>"{text}"</p>
            <h4>{name}</h4>
        </div>
    );
}