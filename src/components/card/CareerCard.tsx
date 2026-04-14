import "@/styles/components/(card)/CareerCard.css";
import SkillLabel from "../SkillLabel";
import type { CareerProject } from "@/types";

type CareerCardProps = Omit<CareerProject, "id" | "type">;

const CareerCard = ({
  title,
  date,
  description,
  skills,
  link,
}: CareerCardProps) => {
  if (link) {
    return (
      <a className="CareerCard" href={link} target="_blank">
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
      </a>
    );
  }

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
