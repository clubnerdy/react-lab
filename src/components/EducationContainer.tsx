import "@/styles/components/EducationContainer.css";
import EducationItem from "./EducationItem";
import type { EducationContent } from "@/types";

interface EducationContainerProps {
  topic: string;
  contents: EducationContent[];
}

const EducationContainer = ({ topic, contents }: EducationContainerProps) => {
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
