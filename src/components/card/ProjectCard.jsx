import "./ProjectCard.css";
import { skillsInfo } from "@/assets";

const ProjectCard = ({
  imgUrl,
  label,
  title,
  description,
  skills,
  link,
  isLive,
}) => {
  // 스킬 이름 비교하여 이미지 매칭하는 로직
  const skillImages = skills.map((name) =>
    skillsInfo.find((s) => s.name === name),
  );

  return (
    <div className="ProjectCard">
      <a href={link} target="_blank">
        <div className="top">
          <div className="row">
            <figure>
              <img src={imgUrl} alt="" />
            </figure>
            <div className={`label ${isLive ? `label_live` : ""}`}>{label}</div>
          </div>
          <div className="column">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="bottom">
          {skillImages.map((item) => (
            <figure key={item.name}>
              <img src={item.src} alt={item.name} />
            </figure>
          ))}
        </div>
      </a>
    </div>
  );
};
export default ProjectCard;
