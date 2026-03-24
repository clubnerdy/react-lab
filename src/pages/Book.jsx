import { useState } from "react";
import TabList from "@/components/TabList";

const Book = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "All" },
    { id: 2, label: "Project" },
    { id: 3, label: "Labs" },
    { id: 4, label: "UXUI" },
    { id: 5, label: "ETC" },
  ];
  return (
    <div>
      Book
      <TabList tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};
export default Book;
