import useWindowWidth from "./useWindowWidth";

export default function useIsMobile() {
  return useWindowWidth() < 768;
}
