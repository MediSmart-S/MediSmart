"use client";

import useScrollTo from "@/app/_hooks/useScrollTo";
import { useScroll } from "../context/ScrollContext";

const NavLink = ({ children, href }) => {
  const { scrollToElement } = useScrollTo();
  const { scrollingSection } = useScroll();

  return (
    <button
      onClick={() => scrollToElement(href)}
      className={`relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2  ${
        scrollingSection === href
          ? "md:after:w-full after:w-0 md:text-primary-500 text-slate-500 hover:text-slate-800"
          : "after:w-0 text-slate-500 hover:text-slate-800"
      } after:h-[2px] after:bg-primary-500 after:rounded-full after:transition-all after:duration-300 pb-1 font-semibold duration-200`}
    >
      {children}
    </button>
  );
};

export default NavLink;
