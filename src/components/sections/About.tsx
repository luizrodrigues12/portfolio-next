import styled from "styled-components";
import Container from "../layout/Container";
import Image from "next/image";
import ProgressBar from "../utils/ProgressBar";

const AboutSection = styled.section`
  min-height: 100vh;
  width: 100%;

  background-color: #141419;

  .image {
    filter: brightness(85%) saturate(100%);
    box-shadow: -8px 8px 0px #91a8eb;
  }
`;

const PrincipalDiv = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 64px;
  }

  p {
    font-size: 20px;
  }
`;

const InfosBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  line-height: 27px;

  .paragraph-1 {
    color: #bebebe;

    span {
      color: #bfcef5;
      font-family: "Inter";
    }
  }

  .paragraph-2 {
    width: 550px;
  }
`;

const BarsBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <PrincipalDiv>
          <Image
            src={"/images/desenho-luiz.jpg"}
            alt="Desenho de Luiz"
            width={608}
            height={700}
            className="image"
          />
          <InfosBox>
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

            <BarsBox>
              <ProgressBar text="UX/UI" level={80} delay={0.1} />
              <ProgressBar text="Next" level={85} delay={0.2} />
              <ProgressBar text="React" level={95} delay={0.3} />
              <ProgressBar text="JavaScript" level={90} delay={0.4} />
              <ProgressBar text="TypeScript" level={97} delay={0.5} />
            </BarsBox>
          </InfosBox>
        </PrincipalDiv>
      </Container>
    </AboutSection>
  );
};

export default About;
