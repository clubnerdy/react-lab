import "@/styles/components/SkillItem.css";

interface SkillItemProps {
  isActive: boolean;
  imgUrl: string;
  name: string;
}

const SkillItem = ({ isActive, imgUrl, name }: SkillItemProps) => {
  return (
    <figure className={`SkillItem ${isActive ? "active" : ""}`}>
      <img src={imgUrl} alt={name} />
    </figure>
  );
};

export default SkillItem;
