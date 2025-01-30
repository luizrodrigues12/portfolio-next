"use client";

import { SectionProvider } from "@/contexts/Section";
import StyledComponentsRegistry from "@/lib/registry";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <SectionProvider>{children}</SectionProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
