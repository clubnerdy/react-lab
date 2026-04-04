import "@/styles/components/SkillLabel.css";

const SkillLabel = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

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
