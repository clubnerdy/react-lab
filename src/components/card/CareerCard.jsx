import "./CareerCard.css";
import SkillLabel from "../SkillLabel";

const CareerCard = ({ title, date, description, skills }) => {
  return (
    <div className="CareerCard">
      <div className="top">
        <h3 className="title">{title}</h3>
        {date && <p className="date">{date}</p>}
      </div>
      <div className="bottom">
        <p className="description">
          {description.map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </p>
        <SkillLabel skills={skills} />
      </div>
    </div>
  );
};
export default CareerCard;
