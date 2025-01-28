"use client";

import { createContext, use, useState } from "react";

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const [scrollingSection, setScrollingSection] = useState({
    "hero-section": false,
  });
  const [scrollableElements, setScrollableElements] = useState({});

  return (
    <ScrollContext.Provider
      value={{
        scrollingSection,
        setScrollingSection,
        scrollableElements,
        setScrollableElements,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

const useScroll = () => {
  const scrollerContext = use(ScrollContext);

  if (!scrollerContext) {
    throw new Error("scroll context was used outside of its provider!");
  }

  return scrollerContext;
};

export { ScrollProvider, useScroll };
