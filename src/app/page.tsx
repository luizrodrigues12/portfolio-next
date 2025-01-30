"use client";

import Hero from "@/components/sections/Hero";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function Page() {
  return (
    <AppContainer>
      <Hero />
    </AppContainer>
  );
}
