import React, { ReactNode } from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100%;
  max-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1440px) {
    padding: 0px 300px;
  }
`;

const Container = ({ children }: { children: ReactNode }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
