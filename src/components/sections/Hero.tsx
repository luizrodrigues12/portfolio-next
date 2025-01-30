"use client";

import styled from "styled-components";
import Container from "../layout/Container";
import { useSectionContext } from "@/contexts/Section";
import { useEffect } from "react";

const HeroSectionStyled = styled.section`
  min-height: 100vh;
  background-color: #101014;
`;

const Hero = () => {
  const { setSection } = useSectionContext();

  useEffect(() => {
    setSection("home");
  });

  return (
    <HeroSectionStyled>
      <Container>
        <div>Hero</div>
      </Container>
    </HeroSectionStyled>
  );
};

export default Hero;
