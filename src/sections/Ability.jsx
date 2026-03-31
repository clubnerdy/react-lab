import AbilityCard from "@/components/card/AbilityCard";
import "./Ability.css";
import { abilities } from "@/data/abilities";

const Ability = () => {
  return (
    <div className="Ability">
      <div className="inner">
        <h3 className="page_title">역량</h3>
        <div className="card_list">
          {abilities.map((item) => (
            <AbilityCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Ability;
