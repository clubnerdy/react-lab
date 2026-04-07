import "@/styles/components/(card)/AbilityCard.css";
import type { Ability } from "@/types";

type AbilityCardProps = Omit<Ability, "id">;

const AbilityCard = ({ imgUrl, title, description }: AbilityCardProps) => {
  return (
    <div className="AbilityCard">
      <figure>
        <img src={imgUrl} alt={title} />
      </figure>
      <div className="container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AbilityCard;
