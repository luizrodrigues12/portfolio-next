import styled from "styled-components";
import ProjectCard from "../utils/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSectionStyled = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: var(--background-hero);

  scroll-margin-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1;

  gap: 40px;
`;

const Projects = () => {
  return (
    <ProjectsSectionStyled id="projects">
      <ProjectsContainer>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </ProjectsContainer>
    </ProjectsSectionStyled>
  );
};

export default Projects;
