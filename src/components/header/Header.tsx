"use client";

import styled from "styled-components";
import Container from "../layout/Container";
import { motion } from "motion/react";
import { useSectionContext } from "@/contexts/Section";

const HeaderStyled = styled.header`
  background-color: #161619;
  font-size: 16px;
  font-family: "Inter";
  position: sticky;
  top: 0;

  height: 100%;

  display: flex;
  justify-items: center;

  .sub-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-family: "ParkinsansMedium";
    font-size: 24px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 60px;
  }

  li {
    cursor: pointer;
  }

  li:hover {
    color: #ececec;
  }

  .select {
    text-decoration: underline;
    text-underline-offset: 3px;
    text-underline-position: above;

    color: #ececec;
  }

  @media (min-width: 1440px) {
    height: 100px;
  }
`;

const Header = () => {
  const { section } = useSectionContext();

  return (
    <HeaderStyled>
      <Container>
        <div className="sub-container">
          <p>Luiz.</p>
          <nav>
            <ul>
              <motion.li
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                className={section === "home" ? "select" : "unselect"}
              >
                Home
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                className={section === "about" ? "select" : "unselect"}
              >
                Sobre
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                className={section === "projects" ? "select" : "unselect"}
              >
                Projetos
              </motion.li>
            </ul>
          </nav>
        </div>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
