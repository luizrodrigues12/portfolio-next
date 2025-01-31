"use client";

import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export default function Page() {
  return (
    <AppContainer>
      <Hero />
      <About />
    </AppContainer>
  );
}
