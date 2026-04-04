import "@/styles/components/TabList.css";

const TabList = ({ tabs, activeTab, onChangeTab }) => {
  return (
    <div className="TabList">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => onChangeTab(tab)}
            className={activeTab == tab ? "active" : ""}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabList;
