import type { TypographyVariantsOptions } from "@mui/material/styles";

import { getRem } from "./utils";

const backward_font = "Helvetica Neue, sans-serif";

const Nunito = `Nunito, ${backward_font}`;
const NotoSans = `Noto Sans, ${backward_font}`;

const defaultHtmlFontsize = 16;

export const typography = {
  htmlFontSize: defaultHtmlFontsize,
  fontFamily: NotoSans,
  // display4
  h1: {
    fontFamily: Nunito,
    fontSize: getRem(96, defaultHtmlFontsize),
    fontWeight: 300,
    lineHeight: getRem(112, defaultHtmlFontsize),
  },
  // display3
  h2: {
    fontFamily: Nunito,
    fontSize: getRem(60, defaultHtmlFontsize),
    fontWeight: 300,
    lineHeight: getRem(72, defaultHtmlFontsize),
  },
  // display2
  h3: {
    fontFamily: Nunito,
    fontSize: getRem(48, defaultHtmlFontsize),
    fontWeight: 400,
    lineHeight: getRem(56, defaultHtmlFontsize),
  },
  // display1
  h4: {
    fontFamily: Nunito,
    fontSize: getRem(34, defaultHtmlFontsize),
    fontWeight: 400,
    lineHeight: getRem(36, defaultHtmlFontsize),
  },
  // headline
  h5: {
    fontFamily: Nunito,
    fontSize: getRem(24, defaultHtmlFontsize),
    fontWeight: 400,
    lineHeight: getRem(24, defaultHtmlFontsize),
  },
  // title
  h6: {
    fontFamily: Nunito,
    fontSize: getRem(20, defaultHtmlFontsize),
    fontWeight: 500,
    lineHeight: getRem(24, defaultHtmlFontsize),
  },
  // subheading2
  subtitle1: {
    fontFamily: Nunito,
    fontSize: getRem(16, defaultHtmlFontsize),
    fontWeight: 400,
    lineHeight: getRem(24, defaultHtmlFontsize),
  },
  // subheading1
  subtitle2: {
    fontFamily: Nunito,
    fontSize: getRem(14, defaultHtmlFontsize),
    fontWeight: 400,
    lineHeight: getRem(24, defaultHtmlFontsize),
  },
  body1: {
    fontFamily: NotoSans,
    fontSize: getRem(16, defaultHtmlFontsize),
    fontWeight: 400,
    lineHeight: getRem(24, defaultHtmlFontsize),
  },
  body2: {
    fontFamily: NotoSans,
    fontSize: getRem(14, defaultHtmlFontsize),
    fontWeight: 400,
    lineHeight: getRem(24, defaultHtmlFontsize),
  },
  button: {
    fontFamily: NotoSans,
    fontSize: getRem(14, defaultHtmlFontsize),
    fontWeight: 700,
    lineHeight: getRem(24, defaultHtmlFontsize),
  },
  caption: {
    fontFamily: NotoSans,
    fontSize: getRem(12, defaultHtmlFontsize),
    fontWeight: 400,
    lineHeight: getRem(16, defaultHtmlFontsize),
  },
  overline: {
    fontFamily: NotoSans,
    fontSize: getRem(10, defaultHtmlFontsize),
    fontWeight: 500,
    lineHeight: getRem(16, defaultHtmlFontsize),
  },
};
