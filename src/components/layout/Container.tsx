import React, { ReactNode } from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    padding: 0px 300px;
  }
`;

const Container = ({ children }: { children: ReactNode }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
