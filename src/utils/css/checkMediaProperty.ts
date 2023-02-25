import { getWindowProperty } from "src/utils/browser";

const checkMediaProperty = (mediaQueryString: string): boolean => {
  const { matchMedia } = getWindowProperty();

  return (matchMedia && matchMedia(`(${mediaQueryString})`).matches) || false;
};

export default checkMediaProperty;
