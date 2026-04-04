import "@/styles/components/Category.css";

const Category = ({ tabs, activeTab, onChangeTab }) => {
  return (
    <div className="Category">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className={activeTab == tab.id ? "active" : ""}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Category;
