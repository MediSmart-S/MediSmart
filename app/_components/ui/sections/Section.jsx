"use client";

import useScrollTo from "@/app/_hooks/useScrollTo";
import { useScroll } from "../../context/ScrollContext";
import { useRef, useState } from "react";
import { InView } from "react-intersection-observer";

const Section = ({
  children,
  id,
  className = "",
  stopInit = true,
  threshold = 0.55,
}) => {
  const [firstSeen, setFirstSeen] = useState(false);

  const sectionRef = useRef();
  useScrollTo(id, sectionRef);

  const { setScrollingSection, passedSections, setPassedSections } =
    useScroll();

  const setInView = (inView, entry) => {
    if (stopInit) {
      if (!firstSeen) {
        setFirstSeen(true);
        return;
      }
    }

    if (passedSections[-2] !== id && passedSections[-1] !== id) {
      setScrollingSection(id);
      setPassedSections((s) => {
        s.push(id);
        return s;
      });
      if (passedSections.length > 5) {
        setPassedSections((s) => {
          s.shift();
          return s;
        });
      }
    }
  };

  return (
    <InView onChange={setInView} threshold={threshold}>
      {({ ref: inViewRef }) => (
        <section ref={sectionRef}>
          <div ref={inViewRef} className={className}>
            {children}
          </div>
        </section>
      )}
    </InView>
  );
};

export default Section;
