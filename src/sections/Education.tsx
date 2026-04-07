import "@/styles/sections/Education.css";
import EducationContainer from "@/components/EducationContainer";
import { educations } from "@/data/educations";

const Education = () => {
  return (
    <section id="Education" className="Education">
      <div className="inner">
        <div className="container">
          {educations.map((item) => (
            <EducationContainer key={item.topic} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
