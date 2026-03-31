import { companyIcon } from "@/assets";
import TabList from "./TabList";
import { useState } from "react";
import CareerCard from "./card/CareerCard";
import "./CareerContainer.css";

const CareerContainer = ({ company }) => {
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
          <h3>주식회사 에이치앤엘홀딩스</h3>
          <ul>
            <li>2023.12 - 2024.12 (1년)</li>
            <li>정규직</li>
            <li>디자인 및 퍼블리싱 / 마케팅</li>
            <li>대리</li>
          </ul>
        </div>
        <div className="career_nav">
          <TabList tabs={tabs} activeTab={active} onTabChange={setActive} />
        </div>
        <div className="career_list">
          {company.map((item) => (
            <CareerCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CareerContainer;
