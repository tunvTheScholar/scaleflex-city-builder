import { useMediaQuery } from "./use-media-query";

export const useIsMobile = () => {
  return useMediaQuery("(min-witdh: 56.25em)");
};
