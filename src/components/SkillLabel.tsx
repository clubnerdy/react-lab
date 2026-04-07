import "@/styles/components/SkillLabel.css";

interface SkillLabelProps {
  skills?: string[];
}

const SkillLabel = ({ skills }: SkillLabelProps) => {
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
