import ProjectCard from "@/components/card/ProjectCard";
import "./Project.css";
import { detailProjects } from "@/data/projects";

const Project = () => {
  return (
    <div className="Project">
      <div className="inner">
        <div className="top">
          <p className="description">프로젝트 상세보기</p>
          <h3 className="title">프로젝트 세부 사항을 확인해 보세요</h3>
        </div>
        <div className="project_list">
          {detailProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Project;
