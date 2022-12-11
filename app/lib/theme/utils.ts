import type { Theme } from "@mui/material";
import { alpha } from "@mui/material";
import tinyColor from "tinycolor2";

export const getRem = (value: number, htmlFontSize = 16) => {
  return value / htmlFontSize + "rem";
};

const defaultBorderRadius = 8;

export const getBorderRadius = (
  dim?: number | { top: number; right: number; bottom: number; left: number }
) => {
  if (typeof dim === "number" || !dim) {
    return `${dim || defaultBorderRadius}px`;
  } else {
    const {
      top = defaultBorderRadius,
      right = defaultBorderRadius,
      bottom = defaultBorderRadius,
      left = defaultBorderRadius,
    } = dim;
    return `${top}px ${right}px ${bottom}px ${left}px`;
  }
};

export const getGradientText = (
  startColor: string,
  endColor: string,
  deg = 135
) => {
  return {
    backgroundImage: `linear-gradient(
      ${deg}deg,
      ${startColor} 30%,
      ${endColor} 70%
    )`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    backgroundClip: "text",
  };
};

export const getBlurBackground = (theme: Theme) => ({
  backgroundColor: alpha(theme.palette.background.default, 0.2),
  backdropFilter: "blur(30px)",
});

export const stringToColour = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    // eslint-disable-next-line no-bitwise
    const value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};

export const getGradientColor = (value: string) => {
  const rgb = stringToColour(value.toLowerCase());

  const tc = tinyColor(rgb);

  let amt = 0,
    c1 = tc;

  while (c1.isLight()) {
    console.log(value, tc.toString(), tc.isLight());
    amt = amt + 5;
    c1 = tc.darken(amt);
  }

  const c2 = c1.clone().darken(-10);

  return `linear-gradient(135deg, ${c1.toHexString()} 30%, ${c2.toHexString()} 70%)`;
};
