"use client";

import { createContext, use, useState } from "react";

const ScrollContext = createContext();

const sections = {
  "hero-section": false,
  "about-section": false,
  "departments-section": false,
  "appointment-section": false,
  "patients-section": false,
  "specialists-section": false,
};

const ScrollProvider = ({ children }) => {
  const [scrollingSection, setScrollingSection] = useState("hero-section");
  const [scrollableElements, setScrollableElements] = useState({});

  const [passedSections, setPassedSections] = useState([]);

  return (
    <ScrollContext.Provider
      value={{
        scrollingSection,
        setScrollingSection,
        scrollableElements,
        setScrollableElements,
        passedSections,
        setPassedSections,
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
