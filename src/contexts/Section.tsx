import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
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

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};

const useSectionContext = () => useContext(SectionContext);

export { SectionProvider, useSectionContext };
