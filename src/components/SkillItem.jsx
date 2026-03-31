import "./SkillItem.css";

const SkillItem = ({ isActive, imgUrl, name }) => {
  return (
    <figure className={`SkillItem ${isActive ? "active" : ""}`}>
      <img src={imgUrl} alt={name} />
    </figure>
  );
};
export default SkillItem;
