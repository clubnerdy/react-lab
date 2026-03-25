import "./SkillLabel.css";

const SkillLabel = ({ skills }) => {
  return (
    <div className="SkillLabel">
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
export default SkillLabel;
