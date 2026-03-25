import "./App.css";
import ProjectCard from "./components/card/ProjectCard";
import { detailProjects } from "@/data/projects";

function App() {
  console.log(detailProjects.map((item) => item));
  return (
    <>
      <div>
        {detailProjects.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default App;
