import "./CareerCard.css";
import SkillLabel from "./SkillLabel";

const CareerCard = () => {
  return (
    <div className="CareerCard">
      <div className="top">
        <h3 className="title">주식회사 해우지엘에스 하이브리드앱 제작</h3>
        <p className="date">2024.05 - 2024.9</p>
      </div>
      <div className="bottom">
        <p className="description">
          GPS 기반 실시간 물류조회 서비스 앱 제작. 웹 페이지, 앱 화면 기획 및
          디자인, 퍼블리싱. 화주, 임직원, 운송자 대상 통합 물류 플랫폼
        </p>
        <SkillLabel />
      </div>
    </div>
  );
};
export default CareerCard;
