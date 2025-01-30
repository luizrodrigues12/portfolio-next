"use client";

import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: #161619;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  @media (min-width: 1440px) {
    height: 100px;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return <FooterStyled>Luiz Rodrigues / {year}</FooterStyled>;
};

export default Footer;
