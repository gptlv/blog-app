"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type Props = { children: ReactNode };

const Providers = ({ children }: Props) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
