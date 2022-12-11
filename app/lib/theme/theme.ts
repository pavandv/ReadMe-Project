import type { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { getThemeTokens } from "./styles";

export const createRMPTheme = (mode: PaletteMode) => {
  const themeOptions = getThemeTokens(mode);
  const theme = createTheme(themeOptions);

  return theme;
};
