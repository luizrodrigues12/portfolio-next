"use client";

import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Page() {
  return (
    <AppContainer>
      <Hero />
      <About />
      <Projects />
    </AppContainer>
  );
}
