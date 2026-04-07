import "@/styles/components/TabList.css";

interface TabListProps {
  tabs: string[];
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

const TabList = ({ tabs, activeTab, onChangeTab }: TabListProps) => {
  return (
    <div className="TabList">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => onChangeTab(tab)}
            className={activeTab === tab ? "active" : ""}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabList;
