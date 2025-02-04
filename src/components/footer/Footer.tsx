"use client";

import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  height: 60px;
  background-color: #202028;
  font-size: 14px;

  p {
    color: var(--text-color);
    filter: brightness(90%);
  }

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    height: 70px;
  }

  @media (min-width: 1440px) {
    height: 90px;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterStyled>
      <p>Luiz Rodrigues / {year}</p>
    </FooterStyled>
  );
};

export default Footer;
