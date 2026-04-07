import { companyIcon } from "@/assets";
import { useState } from "react";
import CareerCard from "./card/CareerCard";
import "@/styles/components/CareerContainer.css";
import Category from "./Category";

const CareerContainer = ({
  companyName,
  period,
  role,
  position,
  hasTabs,
  projects,
}) => {
  const [activeTab, setActiveTab] = useState("dev");

  const onChangeTab = (tab) => {
    setActiveTab(tab);
  };

  const filteredProjects = projects.filter((item) => item.type === activeTab);

  const tabs = [
    { id: "dev", label: "웹 개발" },
    { id: "branding", label: "브랜딩 / 디자인" },
    { id: "contents", label: "콘텐츠 / 운영" },
  ];

  return (
    <div className="CareerContainer">
      <figure>
        <img src={companyIcon} alt="" />
      </figure>
      <div className="container">
        <div className="career_header">
          <h3>{companyName}</h3>
          <ul>
            <li>{period}</li>
            <li>{role}</li>
            <li>{position}</li>
          </ul>
        </div>
        {hasTabs && (
          <div className="career_nav">
            <Category
              tabs={tabs}
              activeTab={activeTab}
              onChangeTab={onChangeTab}
            />
          </div>
        )}
        <div className="career_list">
          {(hasTabs ? filteredProjects : projects).map((item) => (
            <CareerCard key={item.id} {...item} activeTab={activeTab} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CareerContainer;
