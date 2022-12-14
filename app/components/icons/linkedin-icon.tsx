import type { SVGProps } from "./SVG";
import SVG from "./SVG";

function LinkedInIcon({ title = "LinkedIn", ...props }: SVGProps) {
  return (
    <SVG {...props} fill="transparent">
      <title>{title}</title>
      <path
        d="M4.75 7.75a3 3 0 013-3h8.5a3 3 0 013 3v8.5a3 3 0 01-3 3h-8.5a3 3 0 01-3-3v-8.5z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.75 16.25V14a2.25 2.25 0 014.5 0v2.25M10.75 11.75v4.5M7.75 11.75v4.5M7.75 8.75v.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}

export { LinkedInIcon };
