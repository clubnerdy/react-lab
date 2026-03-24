import { useState } from "react";
import TabList from "@/components/TabList";

const Skill = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Dev" },
    { id: 2, label: "Design" },
    { id: 3, label: "Collab" },
  ];
  return (
    <div>
      스킬
      <TabList tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};
export default Skill;
