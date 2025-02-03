import styled from "styled-components";
import Container from "../layout/Container";
import ProgressBar from "../utils/ProgressBar";
import { motion } from "motion/react";
import { useDesktopContext } from "@/contexts/Desktop";

const AboutSection = styled.section`
  max-width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 0px;
  background-color: #171719;
  scroll-margin-top: 60px;

  @media (min-width: 1024px) {
    scroll-margin-top: 80px;
    padding: 40px 0px;
  }

  @media (min-width: 1440px) {
    scroll-margin-top: 40px;
    min-height: 100vh;
  }
`;

const PrincipalDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .image {
    filter: brightness(85%) saturate(100%);
    box-shadow: -4px 4px 0px var(--principal-color);

    width: 97%;
    height: auto;
  }

  h2 {
    display: none;
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    width: 400px;
    gap: 20px;

    p {
      font-size: 14px;
    }
    .image {
      box-shadow: -4px 4px 0px var(--principal-color);
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 0px;

    h2 {
      display: block;
      font-size: 24px;
    }

    .image {
      width: 440px;
      height: auto;
      box-shadow: -8px 8px 0px var(--principal-color);
    }
  }

  @media (min-width: 1440px) {
    .image {
      width: 600px;
      height: auto;
    }

    h2 {
      font-size: 50px;
    }

    p {
      font-size: 20px;
    }
  }
`;

const InfoBox = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 12px;
  }

  @media (min-width: 1024px) {
    gap: 12px;
    width: 45%;
  }

  @media (min-width: 1440px) {
    gap: 18px;

    h2 {
      line-height: 44px;
    }
  }
`;

const Paragraphs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  line-height: 27px;

  .paragraph-1 {
    color: #bebebe;

    span {
      color: var(--principal-color);
      filter: brightness(130%);
      font-family: "Inter";
    }
  }

  .paragraph-2 {
    width: 100%;
  }

  @media (min-width: 768px) {
    gap: 8px;

    .paragraph-1,
    .paragraph-2 {
      line-height: 24px;
    }
  }

  @media (min-width: 1440px) {
    gap: 16px;

    .paragraph-2 {
      width: 550px;
    }

    .paragraph-1,
    .paragraph-2 {
      line-height: 32px;
    }
  }
`;

const BarsBox = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 6px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;

  @media (min-width: 768px) {
    margin-top: 2px;
  }
`;

const About = () => {
  const { isDesktop } = useDesktopContext();

  return (
    <AboutSection id="about">
      <Container>
        <PrincipalDiv>
          <motion.img
            src={"/images/desenho-luiz.jpg"}
            alt="Desenho de Luiz"
            width={608}
            height={700}
            className="image"
            initial={{ opacity: 0 }}
            whileInView={
              isDesktop
                ? { opacity: [0, 1], x: [-25, 0] }
                : { opacity: [0, 1], y: [25, 0] }
            }
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, margin: isDesktop ? "0px" : "-20px" }}
          />
          <InfoBox
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={
              isDesktop
                ? { opacity: [0, 1], x: [30, 0] }
                : { opacity: [0, 1], y: [25, 0] }
            }
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, margin: isDesktop ? "0px" : "60px" }}
          >
            <h2>Sobre.</h2>
            <Paragraphs>
              <p className="paragraph-1">
                Sou um <span>Desenvolvedor Frontend</span> <br />
                nascido em Petrolina - PE, Brasil.
              </p>
              <p className="paragraph-2">
                Estou no mundo desde 2005 e, até pouco tempo, não fazia ideia de
                que minha vocação estaria na área de TI. Felizmente,
                encontrei-me e agora produzo sites e resolvo necessidades
                diárias com códigos.
              </p>
            </Paragraphs>
            <BarsBox
              as={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <ProgressBar text="UX/UI" level={80} delay={0.1} />
              <ProgressBar text="Next" level={85} delay={0.2} />
              <ProgressBar text="React" level={95} delay={0.3} />
              <ProgressBar
                text="JavaScript"
                level={90}
                delay={0.4}
                className="javascript"
              />
              <ProgressBar text="TypeScript" level={97} delay={0.5} />
            </BarsBox>
          </InfoBox>
        </PrincipalDiv>
      </Container>
    </AboutSection>
  );
};

export default About;
