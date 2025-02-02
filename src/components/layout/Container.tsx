import React, { ReactNode } from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100%;
  max-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0px 20px;

  @media (min-width: 768px) {
    padding: 0px 60px;
  }

  @media (min-width: 1024px) {
    padding: 0px 90px;
  }

  @media (min-width: 1440px) {
    padding: 0px 150px;
  }

  @media (min-width: 1800px) {
    padding: 0px 300px;
  }
`;

const Container = ({ children }: { children: ReactNode }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
