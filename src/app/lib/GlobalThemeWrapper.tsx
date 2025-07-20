"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "usehooks-ts";

import { GlobalStyle } from "../themes/GlobalStyles";
import { defaultTheme } from "../themes/defaultTheme";

interface GlobalThemeWrapperProps {
  children: ReactNode;
}

export default function GlobalThemeWrapper({
  children,
}: GlobalThemeWrapperProps) {
  const [theme] = useLocalStorage("theme", defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
