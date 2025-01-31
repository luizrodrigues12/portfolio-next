"use client";

import styled from "styled-components";
import Container from "../layout/Container";
import { useSectionContext } from "@/contexts/Section";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const HeroSectionStyled = styled.section`
  min-height: 100vh;
  background-color: var(--background-hero);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BackgroundBox = styled.div`
  background-color: #191920;
  height: 100%;
  width: 29%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const PrincipalDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImageBoxStyled = styled.div`
  position: relative;
  z-index: 2;
  width: 460px;
  height: 460px;

  .image {
    display: flex;
    background-color: #161619;
    border: 2px solid var(--text-color);
    position: absolute;
    z-index: 3;
  }

  .back-image {
    border: 2px solid #bdbdbd;
    width: 450px;
    height: 450px;
    background-color: #202030;

    position: absolute;
    z-index: 2;
    top: 16px;
    left: 16px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    font-size: 64px;
    font-family: "Parkinsans";
    line-height: 80px;
  }

  p {
    font-size: 20px;
    font-family: "Inter";
    line-height: 28px;

    margin-bottom: 4px;
  }

  span {
    color: #91a8e7;
  }
`;

const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  align-content: space-between;
  gap: 20px;
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  color: var(--text-color);
  font-size: 16px;
  font-family: "InterMedium";

  text-align: center;

  border: 2px solid var(--text-color);
  border-radius: 5px;

  width: 100%;
  padding: 10px;

  &:hover {
    background-color: var(--text-color);
    color: black;
    cursor: pointer;
  }
`;

const Hero = () => {
  const { setSection } = useSectionContext();

  useEffect(() => {
    setSection("home");
  });

  return (
    <HeroSectionStyled>
      <Container>
        <PrincipalDiv>
          <InfoBox>
            <h1>
              Olá, eu sou
              <br />
              <span>Luiz Rodrigues.</span>
            </h1>
            <p>
              Frontend focado na criação de interfaces
              <br /> eficientes, elegantes e bem desenvolvidas.
            </p>
            <ButtonsBox>
              <ButtonStyled
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.05 }}
              >
                Baixar Currículo
              </ButtonStyled>
              <ButtonStyled
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.05 }}
              >
                Entrar em Contato
              </ButtonStyled>
            </ButtonsBox>
          </InfoBox>
          <ImageBoxStyled>
            <Image
              className="image"
              src={"/images/foto-luiz.png"}
              alt="Foto de Luiz Rodrigues."
              width={450}
              height={450}
            />
            <div className="back-image" />
          </ImageBoxStyled>
        </PrincipalDiv>
        <BackgroundBox />
      </Container>
    </HeroSectionStyled>
  );
};

export default Hero;
