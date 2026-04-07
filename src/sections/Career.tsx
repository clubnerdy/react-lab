import CareerContainer from "@/components/CareerContainer";
import "@/styles/sections/Career.css";
import { careers } from "@/data/careers";

const Career = () => {
  return (
    <section id="Career" className="Career">
      <div className="inner">
        <div className="page_top">
          <h3 className="page_title">경력</h3>
          <p className="page_description">2년 9개월</p>
        </div>
        <div className="company_list">
          {careers.map((company) => (
            <CareerContainer key={company.id} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
