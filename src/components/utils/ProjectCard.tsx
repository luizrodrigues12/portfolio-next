import { ProjectType } from "@/data/projects";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "motion/react";

interface projectCardProps {
  project: ProjectType;
  desktopVersion?: boolean;
  delay?: number;
}

const CardContainer = styled.div<{ $development: boolean }>`
  width: 100%;
  height: 580px;
  position: relative;

  background-color: #202028;
  color: var(--text-color);
  border-radius: 10px;

  .image {
    object-fit: cover;
    object-position: top center;
    width: 100%;
    height: 74%;
    border-radius: 7px 7px 0px 0px;
    filter: brightness(${(props) => (props.$development ? "75%" : "95%")});
  }

  @media (min-width: 768px) {
    height: 650px;

    .image {
      height: 77%;
    }
  }

  @media (min-width: 1024px) {
    width: 420px;
    height: 715px;
  }

  @media (min-width: 1440px) {
    width: 425px;
    height: 720px;
  }
`;

const InfoCard = styled.div`
  width: 100%;
  height: 26%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  gap: 12px;
  padding: 10px 12px 18px 12px;

  & h3 {
    font-family: "InterMedium";
    line-height: 14px;
    font-weight: normal;
    font-size: 16px;
  }

  & p {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    height: 23%;
  }

  @media (min-width: 1024px) {
    padding: 14px 16px 22px 16px;
  }

  @media (min-width: 1440px) {
    & h3 {
      line-height: 18px;
      font-size: 20px;
    }
  }
`;

const LibraryContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const LibraryBox = styled.div<{ $development?: boolean }>`
  width: 100%;
  padding: 8px 5px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 12px;
  font-family: "InterMedium";

  background-color: var(--principal-color);
  filter: brightness(${(props) => (props.$development ? "75%" : "95%")});
  color: #0f0f0f;

  &:hover {
    background-color: var(--text-color);
    filter: brightness(90%);
  }
`;

const ProjectCard = ({
  project,
  desktopVersion = false,
  delay,
}: projectCardProps) => {
  return (
    <CardContainer
      $development={project.link === "#projects" ? true : false}
      as={motion.div}
      initial={desktopVersion ? { opacity: 0 } : false}
      whileInView={{
        opacity: 1,
        transition: desktopVersion
          ? { duration: 0.5, delay: delay }
          : { duration: 0.1 },
      }}
      whileHover={{
        scale: desktopVersion ? 1.015 : 1,
        cursor: "pointer",
        filter: "brightness(105%)",
      }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.05 }}
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

      <InfoCard>
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
