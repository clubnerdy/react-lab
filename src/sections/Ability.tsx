import AbilityCard from "@/components/card/AbilityCard";
import "@/styles/sections/Ability.css";
import { abilities } from "@/data/abilities";

const Ability = () => {
  return (
    <section id="Ability" className="Ability">
      <div className="inner">
        <h3 className="page_title">역량</h3>
        <div className="card_list">
          {abilities.map((item) => (
            <AbilityCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ability;
