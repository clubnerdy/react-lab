import "./TabList.css";

const TabList = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="TabList">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={onTabChange}
            className={activeTab == tab.id ? "active" : ""}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabList;
