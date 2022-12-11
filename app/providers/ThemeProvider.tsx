import type { PaletteMode } from "@mui/material";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import type { PropsWithChildren } from "react";
import { useMemo } from "react";

import { createRMPTheme } from "../lib/theme";

export interface ThemeConfig {
  mode?: PaletteMode;
}

export const RMPThemeProvider = ({
  mode,
  children,
}: PropsWithChildren<ThemeConfig>) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => createRMPTheme(mode ?? (prefersDarkMode ? "dark" : "light")),
    [mode, prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};
