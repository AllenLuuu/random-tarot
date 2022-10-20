import useWindowHeight from "./useWindowHeight";
import useWindowWidth from "./useWindowWidth";

export default function(size?: cardSize, Xnumber?: number, Ynumber?: number, marginSize?: number) {
  const windowHeight = useWindowHeight();
  const ratio = 15 / 26;
  let scale!: {x: number, y: number};
  switch (size) {
    case "tiny": 
      scale = {
        x: ratio * 0.16 * windowHeight,
        y: 0.16 * windowHeight,
      };
      break;
    case "small":
      scale = {
        x: ratio * 0.20 * windowHeight,
        y: 0.20 * windowHeight,
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

  if (Xnumber !== undefined && Ynumber !==undefined && marginSize !== undefined) {
    const windowWidth = useWindowWidth();
    if (Xnumber * scale.x + Ynumber *scale.y + marginSize > windowWidth) {
      scale.y = (windowWidth - marginSize) / (Xnumber * ratio + Ynumber);
      scale.x = scale.y * ratio;
    }
  }

  return scale;
}