import "./EducationContainer.css";
import EducationItem from "./EducationItem";

const EducationContainer = ({ topic, contents }) => {
  return (
    <div className="EducationContainer">
      <h3 className="topic">{topic}</h3>
      {contents.map((item) => (
        <EducationItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default EducationContainer;
