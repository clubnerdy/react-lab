import { useState } from "react";
import TabList from "@/components/TabList";
import SkillItem from "@/components/SkillItem";
import "./Skill.css";
import { skillsInfo } from "@/assets";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { id: 1, label: "All" },
    { id: 2, label: "Dev" },
    { id: 3, label: "Design" },
    { id: 4, label: "Collab" },
  ];
  return (
    <div className="Skill">
      <div className="inner">
        <h3 className="page_title">기술</h3>
        <div className="container">
          <TabList
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <div className="skill_list">
            {skillsInfo.map((item) => (
              <SkillItem
                key={item.name}
                imgUrl={item.src}
                name={item.name}
                isActive={activeTab === "All" || item.type === activeTab}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
