import { useState } from "react";
import TabList from "@/components/TabList";
import SkillItem from "@/components/SkillItem";
import "@/styles/sections/Skill.css";
import { skillsInfo } from "@/assets";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("All");

  const onChangeTab = (tab) => {
    setActiveTab(tab);
  };

  const tabs = ["All", "Dev", "Design", "Collab"];

  return (
    <section id="Skill" className="Skill">
      <div className="inner">
        <h3 className="page_title">기술</h3>
        <div className="container">
          <TabList
            tabs={tabs}
            activeTab={activeTab}
            onChangeTab={onChangeTab}
          />
          <div className="skill_list">
            {skillsInfo.map((item) => (
              <SkillItem
                key={item.name}
                imgUrl={item.src}
                name={item.name}
                type={item.type}
                isActive={activeTab === "All" || item.type === activeTab}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
