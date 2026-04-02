import "./Education.css";
import EducationContainer from "@/components/EducationContainer";
import { educations } from "@/data/educations";

const Education = () => {
  return (
    <div className="Education">
      <div className="inner">
        <div className="container">
          {educations.map((item) => (
            <EducationContainer key={item.topic} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Education;
