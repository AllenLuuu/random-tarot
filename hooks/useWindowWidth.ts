import { useEffect, useState } from "react";

export default function () {
  const [width, setWidth] = useState(0);

  function handleResize(): void {
    setWidth(document.body.clientWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
        window.removeEventListener("resize", handleResize);
    }
  });

  return width;
}
