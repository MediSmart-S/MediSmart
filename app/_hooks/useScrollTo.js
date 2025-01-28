import { useEffect } from "react";
import { useScroll } from "../_components/context/ScrollContext";

const useScrollTo = (placeholder, ref) => {
  const { scrollableElements, setScrollableElements } = useScroll();

  useEffect(() => {
    if (!placeholder || !ref) return;
    setScrollableElements((s) => {
      const newObj = { ...s };
      newObj[placeholder] = ref.current;

      return newObj;
    });
  }, []);

  const scrollToElement = (to) => {
    if (!to) {
      if (!ref) {
        throw new Error("no element placeholder or ref was provided!");
      } else {
        ref.current.scrollIntoView({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    } else {
      if (!scrollableElements[to])
        throw new Error(
          `the "${to}" element was not added to scrollable elements list`
        );
      scrollableElements[to].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return { scrollToElement };
};

export default useScrollTo;
