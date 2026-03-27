import "./EducationContainer.css";
import EducationItem from "./EducationItem";

const EducationContainer = () => {
  return (
    <div className="EducationContainer">
      <h3 className="topic">학력</h3>
      <EducationItem />
      <EducationItem />
    </div>
  );
};
export default EducationContainer;
