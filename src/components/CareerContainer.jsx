import { companyIcon } from "@/assets";
import TabList from "./TabList";
import { useState } from "react";
import CareerCard from "./card/CareerCard";
import "./CareerContainer.css";

const CareerContainer = ({
  companyName,
  period,
  employment,
  role,
  position,
  hasTabs,
  projects,
}) => {
  const [active, setActive] = useState("dev");
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
            <li>{employment}</li>
            <li>{role}</li>
            <li>{position}</li>
          </ul>
        </div>
        {hasTabs && (
          <div className="career_nav">
            <TabList tabs={tabs} activeTab={active} onTabChange={setActive} />
          </div>
        )}
        <div className="career_list">
          {projects.map((item) => (
            <CareerCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CareerContainer;
