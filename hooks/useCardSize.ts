import useElementSize from "./useElementSize";

export default function (
  size?: cardSize,
  Xnumber?: number,
  Ynumber?: number,
  marginSize?: number
) {
  const { width: containerWidth, height: containerHeight } =
    useElementSize("card_container");
  const ratio = 15 / 26;
  let scale!: { x: number; y: number };
  switch (size) {
    case "tiny":
      scale = {
        x: ratio * 0.16 * containerHeight,
        y: 0.16 * containerHeight,
      };
      break;
    case "small":
      scale = {
        x: ratio * 0.2 * containerHeight,
        y: 0.2 * containerHeight,
      };
      break;
    case "medium":
      scale = {
        x: ratio * 0.25 * containerHeight,
        y: 0.25 * containerHeight,
      };
      break;
    case "large":
      scale = {
        x: ratio * 0.36 * containerHeight,
        y: 0.36 * containerHeight,
      };
      break;
    case "xlarge":
      scale = {
        x: ratio * 0.5 * containerHeight,
        y: 0.5 * containerHeight,
      };
      break;
    default:
      scale = {
        x: ratio * 0.25 * containerHeight,
        y: 0.25 * containerHeight,
      };
      break;
  }

  if (
    Xnumber !== undefined &&
    Ynumber !== undefined &&
    marginSize !== undefined
  ) {
    if (Xnumber * scale.x + Ynumber * scale.y + marginSize > containerWidth) {
      scale.y = (containerWidth - marginSize) / (Xnumber * ratio + Ynumber);
      scale.x = scale.y * ratio;
    }
  }

  if (scale.x < 0 || scale.y < 0) {
    scale = { x: 0, y: 0 };
  }

  return scale;
}
