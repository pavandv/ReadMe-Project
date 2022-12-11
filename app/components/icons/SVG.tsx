import { styled } from "@mui/material";
import type { PropsWithChildren } from "react";

interface Props {
  fontSize: string | number;
}

export const StyledSVG = styled("svg")<Props>(({ fontSize }) => ({
  width: "1em",
  height: "1em",
  fontSize,
}));

export interface SVGProps {
  size?: number | string;
  title?: string;
  fill?: string;
}

export const SVG = ({
  children,
  size = "inherit",
  fill = "CurrentColor",
}: PropsWithChildren<SVGProps>) => {
  return (
    <StyledSVG fill={fill} fontSize={size} viewBox="0 0 24 24">
      {children}
    </StyledSVG>
  );
};

export default SVG;
