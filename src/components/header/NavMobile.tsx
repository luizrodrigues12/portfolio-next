import { useSectionContext } from "@/contexts/Section";
import { AlignRight, CloseCircle } from "flowbite-react-icons/outline";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

const NavMobileContainer = styled.div`
  .hamburguer {
    width: 36px;
    height: auto;
    stroke-width: 1px;

    color: var(--text-color);
    filter: brightness(110%);

    margin-right: -9px;
    margin-bottom: -4px;
  }

  @media (min-width: 768px) {
    .hamburguer {
      width: 42px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavMobileStyled = styled.div`
  background-color: var(--background-header);

  border-left: 1px solid var(--border-color);

  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;

  ul {
    list-style: none;
    font-size: 14px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 0.5px solid var(--border-color);
  }

  .li-close {
    width: 100%;
    justify-content: end;

    padding-right: 20px;
  }

  .close-circle {
    width: 28px;
    height: 28px;
    margin-right: -3px;
    stroke-width: 1px;

    filter: brightness(90%);
  }

  p {
    font-size: 14px;
    font-family: "Inter";
  }

  & .select p {
    filter: brightness(200%);
  }

  & .no-select p {
    filter: brightness(80%);
  }

  @media (min-width: 768px) {
    width: 35%;

    p {
      font-size: 16px;
    }

    .li-close {
      justify-content: center;
      padding-right: 0px;
    }

    .close-circle {
      width: 32px;
      height: 32px;
      margin-right: -3px;
      stroke-width: 1px;

      padding-left: 2px;

      filter: brightness(90%);
    }
  }
`;

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { section, setSection } = useSectionContext();

  return (
    <NavMobileContainer>
      <AlignRight className="hamburguer" onClick={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
        {isOpen && (
          <NavMobileStyled
            as={motion.div}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ x: "100%", transition: { duration: 0.2 } }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              <li className="li-close">
                <CloseCircle
                  className="close-circle"
                  onClick={() => setIsOpen(false)}
                />
              </li>
              <li
                className={section == "hero" ? "select" : "no-select"}
                onClick={() => {
                  router.push("#hero");
                  setSection("hero");
                  setIsOpen(false);
                }}
              >
                <p>home</p>
              </li>
              <li
                className={section == "about" ? "select" : "no-select"}
                onClick={() => {
                  router.push("#about");
                  setSection("about");
                  setIsOpen(false);
                }}
              >
                <p>sobre</p>
              </li>
              <li
                className={section == "projects" ? "select" : "no-select"}
                onClick={() => {
                  router.push("#projects");
                  setSection("projects");
                  setIsOpen(false);
                }}
              >
                <p>projetos</p>
              </li>
            </ul>
          </NavMobileStyled>
        )}
      </AnimatePresence>
    </NavMobileContainer>
  );
};

export default NavMobile;
