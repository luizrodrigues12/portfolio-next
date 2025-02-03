"use client";

import { IsDesktopProvider } from "@/contexts/Desktop";
import { SectionProvider } from "@/contexts/Section";
import StyledComponentsRegistry from "@/lib/registry";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <IsDesktopProvider>
        <SectionProvider>{children}</SectionProvider>
      </IsDesktopProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
