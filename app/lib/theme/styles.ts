import type { PaletteMode } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";

import { blue, green, red, yellow } from "./colors";
import { typography } from "./typography";
// import { getBorderRadius } from "./utils";

export const getThemeTokens = (mode: PaletteMode) => {
  const PRIMARY_MAIN = mode === "dark" ? blue[700] : blue[500];
  const themeOptions: ThemeOptions = {
    components: {
      MuiIcon: {
        defaultProps: {
          // baseClassName: "material-icons-round",
          baseClassName: "material-symbols-rounded",
        },
      },
    },
    shape: {
      borderRadius: 8, // getBorderRadius(),
    },
    palette: {
      mode,
      primary: {
        main: PRIMARY_MAIN,
      },
      secondary: {
        main: green["500"],
      },
      error: {
        main: red["500"],
      },
      warning: {
        main: yellow["500"],
      },
    },
    typography,
  };
  return themeOptions;
};
