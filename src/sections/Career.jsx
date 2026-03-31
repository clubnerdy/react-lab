import CareerContainer from "@/components/CareerContainer";
import "./Career.css";
import { careerHnl, careerMpr } from "@/data/projects";

const Career = () => {
  return (
    <div className="Career">
      <div className="inner">
        <div className="page_top">
          <h3 className="page_title">경력</h3>
          <p className="page_description">2년 9개월</p>
        </div>
        <CareerContainer company={careerHnl} />
        <CareerContainer company={careerMpr} />
      </div>
    </div>
  );
};
export default Career;
