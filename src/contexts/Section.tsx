import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface SectionContextType {
  section: string;
  setSection: Dispatch<SetStateAction<string>>;
}

const SectionContext = createContext<SectionContextType>(
  {} as SectionContextType
);

const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [section, setSection] = useState("");

  useEffect(() => {
    const pathName = window.location.href.split("#");
    if (pathName[1]) {
      setSection(pathName[1]);
      return;
    }
    setSection("hero");
  }, []);

  useEffect(() => {
    if (window === undefined) return;

    window.addEventListener("scroll", () => {
      const aboutSectionTop = document
        .querySelector("#about")
        ?.getBoundingClientRect().top;

      const projectsSectionTop = document
        .querySelector("#projects")
        ?.getBoundingClientRect().top;

      if (aboutSectionTop! - 150 > 0) {
        setSection("hero");
      }

      if (aboutSectionTop! - 150 <= 0) {
        setSection("about");
      }

      if (projectsSectionTop! - 150 <= 0) {
        setSection("projects");
      }
    });
  });

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};

const useSectionContext = () => useContext(SectionContext);

export { SectionProvider, useSectionContext };
