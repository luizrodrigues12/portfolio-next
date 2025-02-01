import { ProjectType } from "@/data/projects";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "motion/react";

const CardContainer = styled.div<{ $development: boolean }>`
  width: 385px;
  height: 680px;

  position: relative;

  background-color: #202028;
  color: var(--text-color);

  border-radius: 10px;

  .image {
    object-fit: cover;
    object-position: top center;

    width: 100%;
    height: 70%;
    border-radius: 7px 7px 0px 0px;
    filter: brightness(${(props) => (props.$development ? "90%" : "100%")});
  }
`;

const InfoCard = styled.div<{ $development?: boolean }>`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  padding: 14px 16px 22px 16px;

  & h3 {
    font-family: "InterMedium";
    line-height: 18px;
    font-weight: normal;
    font-size: 20px;
  }
`;

const LibraryContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const LibraryBox = styled.p`
  width: 100%;
  padding: 8px 10px;
  border-radius: 5px;

  cursor: pointer;

  font-size: 14px;
  font-family: "InterMedium";
  text-align: center;

  background-color: var(--principal-color);
  filter: brightness(100%);
  color: #0f0f0f;

  &:hover {
    background-color: var(--text-color);
    filter: brightness(120%);
  }
`;

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <CardContainer
      $development={project.link === "#projects" ? true : false}
      as={motion.div}
      whileHover={{ scale: 1.03, cursor: "pointer" }}
      whileTap={{ scale: 1.01 }}
      transition={{ duration: 0.1 }}
      onClick={() =>
        project.link === "#projects" ? "" : window.open(project.link)
      }
    >
      <Image
        src={project.image}
        alt={`Projeto ${project.title}.`}
        width={500}
        height={600}
        className="image"
      />

      <InfoCard $development={project.link === "#projects" ? true : false}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <LibraryContainer>
          {project.libraries.map((library, i) => (
            <LibraryBox key={i}>{library}</LibraryBox>
          ))}
        </LibraryContainer>
      </InfoCard>
    </CardContainer>
  );
};

export default ProjectCard;
