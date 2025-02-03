"use client";

import styled from "styled-components";
import Container from "../layout/Container";
import { useSectionContext } from "@/contexts/Section";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const HeroSectionStyled = styled.section`
  background-color: var(--background-hero);
  position: relative;

  margin-top: 60px;
  padding: 60px 0px 80px 0px;
  scroll-margin-top: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 380px) {
    padding: 40px 0px;
  }

  @media (min-width: 1024px) {
    scroll-margin-top: 0px;
    margin-top: 0px;
    padding: 0px;
    min-height: 100vh;
  }
`;

const BackgroundBox = styled.div`
  background-color: var(--principal-color);
  filter: brightness(80%);
  height: 100%;
  width: 29%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;

  display: none;

  @media (min-width: 1024px) {
    width: 27%;
    display: block;
  }

  @media (min-width: 1440px) {
    width: 28%;
  }
`;

const PrincipalDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageBoxStyled = styled.div`
  position: relative;
  z-index: 2;
  width: 280px;
  height: 280px;

  .image {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #080808;
    border: 2px solid var(--text-color);
    position: absolute;
    z-index: 3;

    border-radius: 10px;
  }

  .back-image {
    border: 2px solid #bdbdbd;
    width: 100%;
    height: 100%;
    background-color: #191920;
    display: none;
  }

  @media (min-width: 1024px) {
    width: 360px;
    height: 360px;

    .image {
      background-color: #161619;
      border-radius: 0;
    }

    .back-image {
      display: block;

      position: absolute;
      z-index: 2;
      top: 12px;
      left: 12px;
    }
  }

  @media (min-width: 1440px) {
    width: 480px;
    height: 480px;
    .image {
    }

    .back-image {
      top: 16px;
      left: 16px;
    }
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  width: auto;

  h1 {
    font-size: 36px;
    font-family: "Parkinsans";
    line-height: 44px;
  }

  p {
    display: none;
    color: var(--text-color);
  }

  span {
    color: var(--principal-color);
  }

  @media (min-width: 1024px) {
    align-items: start;
    text-align: left;

    p {
      display: block;

      font-size: 20px;
      font-family: "Inter";
      line-height: 28px;
    }
  }

  @media (min-width: 1024px) {
    gap: 28px;

    h1 {
      font-size: 52px;
      line-height: 60px;
    }
  }

  @media (min-width: 1440px) {
    gap: 28px;

    h1 {
      font-size: 60px;
      line-height: 72px;
    }

    p {
      margin-bottom: 4px;
    }
  }
`;

const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  gap: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const ButtonStyled = styled.a`
  background-color: transparent;
  color: var(--text-color);
  font-size: 14px;
  font-family: "InterMedium";

  text-align: center;

  border: 2px solid var(--text-color);
  border-radius: 5px;

  width: 100%;
  padding: 10px;

  &:hover {
    border-color: #91a8e7;
    background-color: #91a8e7;
    color: #161616;
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    font-size: 16px;

    p {
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 4px;
    }
  }
`;

const Hero = () => {
  const { setSection } = useSectionContext();

  useEffect(() => {
    setSection("hero");
  }, [setSection]);

  return (
    <HeroSectionStyled id="hero">
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
                href="documents/curriculo-luiz.pdf"
                download
                as={motion.a}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.01 }}
              >
                Baixar Currículo
              </ButtonStyled>
              <ButtonStyled
                href={`mailto:luizrodrigues090705@gmail.com`}
                as={motion.a}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.01 }}
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
              width={550}
              height={550}
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
