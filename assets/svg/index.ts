import Headphones from "./headphones.svg";
import { cssInterop } from "nativewind";

// Add SVG components here.
// Key will dictate how to use the component i.e. <SVG.* /> where * is the key.
export const SVG = {
  Headphones,
  Headphones2: Headphones,
} as const;

Object.values(SVG).forEach((svg) => {
  // TODO: Figure out how to type this correctly
  cssInterop(svg, {
    className: {
      target: "style",
      nativeStyleToProp: {
        width: true,
        height: true,
        stroke: true,
        strokeWidth: true,
        fill: true,
      },
    },
  });
});

export default SVG;
