"use client";

import styled from "styled-components";
import Container from "../layout/Container";
import { motion } from "motion/react";
import { useSectionContext } from "@/contexts/Section";

const HeaderStyled = styled.header`
  background-color: #161619;

  font-size: 16px;
  font-family: "Inter";

  display: flex;
  justify-items: center;

  position: absolute;
  z-index: 10;

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

  @media (min-width: 1440px) {
    height: 100px;
    width: 100%;
  }
`;

const NavStyled = styled.nav`
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
`;

const Header = () => {
  const { section } = useSectionContext();

  return (
    <HeaderStyled>
      <Container>
        <div className="sub-container">
          <p>Luiz.</p>
          <NavStyled>
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
          </NavStyled>
        </div>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
