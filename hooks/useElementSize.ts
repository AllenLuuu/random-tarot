import { useEffect, useState } from "react";

export default function (id: string) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  function handleResize(): void {
    setWidth(document.getElementById(id)?.offsetWidth || 0);
    setHeight(document.getElementById(id)?.offsetHeight || 0);
  }

  useEffect(() => {
    const element = document.getElementById(id);

    const resizeObserver = new ResizeObserver(() => handleResize());
    if (element) {
      resizeObserver.observe(element);

      handleResize();

      return () => {
        resizeObserver.unobserve(element);
        resizeObserver.disconnect();
      };
    }
  }, [id]);
  return { width, height };
}
