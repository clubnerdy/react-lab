import "@/styles/components/Category.css";
import type { CategoryTab } from "@/types";

interface CategoryProps {
  tabs: CategoryTab[];
  activeTab: string;
  onChangeTab: (id: string) => void;
}

const Category = ({ tabs, activeTab, onChangeTab }: CategoryProps) => {
  return (
    <div className="Category">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
