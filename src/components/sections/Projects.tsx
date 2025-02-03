import styled from "styled-components";
import ProjectCard from "../utils/ProjectCard";
import { projects } from "@/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const ProjectsSectionStyled = styled.section`
  width: 100%;
  background-color: var(--background-hero);

  padding: 30px 20px;

  scroll-margin-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (min-width: 768px) {
    padding: 40px 60px;
  }

  @media (min-width: 1024px) {
    scroll-margin-top: 100px;
    padding: 40px 0px;
    min-height: 100vh;
  }

  @media (min-width: 1440px) {
    scroll-margin-top: 50px;
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  max-height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 1;

  gap: 16px;

  .mobile {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;

    .swiper-button-prev {
      background-color: #00000099;
      color: white;
      padding: 30px 19px 30px 16px;
      border-radius: 5px;

      top: 35%;
    }

    .swiper-button-next {
      background-color: #00000099;
      color: white;
      padding: 30px 16px 30px 20px;
      border-radius: 5px;

      top: 35%;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 24px;
    }
  }

  .desktop {
    width: 100%;
    height: 100%;
    display: none;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 695px;
    gap: 40px;

    .mobile {
      .swiper-button-next,
      .swiper-button-prev {
        top: 40%;
        padding-top: 35px;
        padding-bottom: 35px;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: auto;

    .desktop {
      width: 100%;
      height: auto;

      display: grid;
      grid-template-columns: repeat(2, auto);
      justify-content: center;
      column-gap: 16px;
      row-gap: 16px;
    }

    .mobile {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    .desktop {
      grid-template-columns: repeat(3, auto);
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsSectionStyled id="projects">
      <ProjectsContainer>
        <div className="mobile">
          <Swiper modules={[Navigation]} spaceBetween={10} navigation>
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <ProjectCard key={i} project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="desktop">
          {projects.map((project, i) => (
            <ProjectCard desktopVersion={true} key={i} project={project} />
          ))}
        </div>
      </ProjectsContainer>
    </ProjectsSectionStyled>
  );
};

export default Projects;
