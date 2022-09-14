import { Box, Img } from "@chakra-ui/react";
import { a, useSpring } from "@react-spring/web";
import { useState } from "react";

function Card({
  size,
  link,
  onClick,
}: {
  size?: "medium" | "large";
  link: string;
  onClick?: Function | null;
}) {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const scale = size === "large" ? { x: 150, y: 260 } : { x: 75, y: 130 };

  function onClickFunction() {
    setFlipped((state) => !state);
    if (onClick) {
      onClick();
    }
  }

  return (
    <Box onClick={onClickFunction}>
      <a.div
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          borderRadius: "4px",
          position: "fixed",
          cursor: "pointer",
          marginLeft: -0.5 * scale.x,
          marginTop: -0.5 * scale.y,
        }}
      >
        <Img
          w={scale.x}
          h={scale.y}
          src="https://spells8.com/wp-content/uploads/2020/04/back-tarot-200x340.png"
          borderRadius={4}
        ></Img>
      </a.div>
      <a.div
        style={{
          opacity,
          transform,
          rotateY: "180deg",
          position: "fixed",
          cursor: "pointer",
          marginLeft: -0.5 * scale.x,
          marginTop: -0.5 * scale.y,
        }}
      >
        <Img w={scale.x} h={scale.y} src={link}></Img>
      </a.div>
    </Box>
  );
}

export default Card;
