import "./Category.css";

const Category = ({ tabs, isActive, onTabChange }) => {
  return (
    <div className="Category">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={onTabChange}
            className={isActive == tab.id ? "active" : ""}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Category;
