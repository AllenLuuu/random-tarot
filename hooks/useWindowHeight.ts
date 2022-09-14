import { useEffect, useState } from "react";

export default function () {
  const [height, setHeight] = useState(0);

  function handleResize(): void {
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
        window.removeEventListener("resize", handleResize);
    }
  });

  return height;
}
