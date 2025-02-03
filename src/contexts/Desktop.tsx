"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IsDesktopType {
  isDesktop: boolean;
  setIsDesktop: Dispatch<SetStateAction<boolean>>;
}

const IsDesktopContext = createContext({} as IsDesktopType);

const IsDesktopProvider = ({ children }: { children: ReactNode }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (innerWidth != undefined && innerWidth >= 1023) {
      setIsDesktop(true);
    }
  }, [isDesktop]);
  return (
    <IsDesktopContext.Provider value={{ isDesktop, setIsDesktop }}>
      {children}
    </IsDesktopContext.Provider>
  );
};

const useDesktopContext = () => useContext(IsDesktopContext);

export { useDesktopContext, IsDesktopProvider };
