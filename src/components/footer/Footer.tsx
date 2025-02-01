"use client";

import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  background-color: #202028;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1440px) {
    height: 100px;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return <FooterStyled>Luiz Rodrigues / {year}</FooterStyled>;
};

export default Footer;
