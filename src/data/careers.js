import { careerHnl, careerMpr } from "./projects";

const careers = [
  {
    id: "hnl",
    companyName: "주식회사 에이치앤엘홀딩스",
    period: "2023.12 - 2024.12 (1년)",
    employment: "정규직",
    role: "디자인 및 퍼블리싱 / 마케팅",
    position: "대리",
    hasTabs: true,
    projects: careerHnl,
  },
  {
    id: "mpr",
    companyName: "주식회사 엠피알",
    period: "2020.06 - 2022.01 (1년 8개월)",
    employment: "정규직",
    role: "디자인 및 마케팅",
    position: "주임",
    hasTabs: false,
    projects: careerMpr,
  },
];

export { careers };
