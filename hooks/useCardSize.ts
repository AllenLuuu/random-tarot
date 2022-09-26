import useWindowHeight from "./useWindowHeight";

export default function(size?:  "small" | "medium" | "large" | "xlarge") {
  const windowHeight = useWindowHeight();
  const ratio = 15 / 26;
  let scale!: {x: number, y: number};
  switch (size) {
    case "small":
      scale = {
        x: ratio * 0.18 * windowHeight,
        y: 0.18 * windowHeight,
      };
      break;
    case "medium":
      scale = {
        x: ratio * 0.25 * windowHeight,
        y: 0.25 * windowHeight,
      }
      break;
    case "large":
      scale = {
        x: ratio * 0.36 * windowHeight,
        y: 0.36 * windowHeight,
      }
      break;
    case "xlarge":
      scale = {
        x: ratio * 0.5 * windowHeight,
        y: 0.5 * windowHeight,
      }
      break;
    default:
      scale = {
        x: ratio * 0.25 * windowHeight,
        y: 0.25 * windowHeight,
      }
      break;    
  }

  return scale;
}