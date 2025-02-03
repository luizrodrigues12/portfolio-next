"use client";

import styled from "styled-components";
import Container from "../layout/Container";
import { motion } from "motion/react";
import { useSectionContext } from "@/contexts/Section";

const HeaderStyled = styled.header`
  background-color: #202028;
  height: 60px;
  width: 100%;

  font-size: 16px;
  font-family: "Inter";

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 10;

  .sub-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-family: "ParkinsansMedium";
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    height: 80px;

    p {
      font-size: 24px;
    }
  }

  @media (min-width: 1440px) {
    height: 100px;

    p {
      font-size: 24px;
    }
  }
`;

const NavStyled = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 30px;
  }

  li {
    cursor: pointer;
  }

  li:hover {
    color: var(--text-color);
    filter: brightness(120%);
  }

  .select {
    color: var(--text-color);
    font-family: "Inter";
    filter: brightness(110%);
  }

  @media (min-width: 1024px) {
    ul {
      gap: 50px;
    }
  }

  @media (min-width: 1440px) {
    ul {
      gap: 60px;
    }
  }
`;

const Header = () => {
  const { section, setSection } = useSectionContext();

  return (
    <HeaderStyled
      as={motion.header}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 1], y: [-60, 0] }}
      transition={{ duration: 0.4 }}
    >
      <Container>
        <div className="sub-container">
          <p>Luiz.</p>
          <NavStyled>
            <ul>
              <motion.li
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className={section === "hero" ? "select" : "unselect"}
                onClick={() => setSection("hero")}
              >
                <a href="#hero">Home</a>
              </motion.li>
              <motion.li
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className={section === "about" ? "select" : "unselect"}
                onClick={() => setSection("about")}
              >
                <a href="#about">Sobre</a>
              </motion.li>
              <motion.li
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className={section === "projects" ? "select" : "unselect"}
                onClick={() => setSection("projects")}
              >
                <a href="#projects">Projetos</a>
              </motion.li>
            </ul>
          </NavStyled>
        </div>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
