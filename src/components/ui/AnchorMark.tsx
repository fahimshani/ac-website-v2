import { SVGProps } from "react";

/**
 * The Anchorage Chambers brand mark — an anchor/checkmark/arrow hybrid.
 * Used both as the wordmark icon (small, solid) and as the large, faint
 * decorative graphic behind hero sections. Colored via `currentColor`, so
 * set text color on the wrapper to recolor it.
 */
export function AnchorMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M 24 24 L 46 50 Q 54 60 54 70 L 54 76 L 82 76"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="60" cy="15" r="8.5" stroke="currentColor" strokeWidth="6" />
      <polygon points="13.6,11.9 30.07,18.8 17.93,29.2" fill="currentColor" />
      <polygon points="98,76 82,84 82,68" fill="currentColor" />
    </svg>
  );
}
