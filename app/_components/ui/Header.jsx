"use client";

import NavigationBar, { navigationLinks } from "./NavigationBar";
import TopTagged from "./TopTagged";
import { useScroll } from "../context/ScrollContext";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import NavLink from "./NavLink";

const Header = () => {
  const { scrollingSection } = useScroll();
  const [showNav, setShowNav] = useState(false);

  return (
    <header
      className={`bg-white sticky top-0 left-0 ${
        scrollingSection === "hero-section"
          ? "shadow-transparent"
          : "translate-y-0 md:-translate-y-16 shadow-neutral-200"
      } shadow-lg z-20 transition-all duration-500`}
    >
      <TopTagged />
      <div className="relative w-full h-px bg-primary-400 z-30 "></div>
      <NavigationBar />
      <div
        className={`md:hidden flex flex-col justify-start items-center gap-8 absolute bottom-0 left-1/2 -translate-x-1/2 ${
          showNav ? "translate-y-full" : "translate-y-12"
        } w-full sm:w-3/4 py-4 bg-slate-100 border border-neutral-200 will-change-transform transition-all duration-500 z-10 mobile-nav`}
      >
        {navigationLinks.map(({ href, placeholder }, i) => (
          <NavLink key={i} href={href}>
            {placeholder}
          </NavLink>
        ))}
        <button
          onClick={() => setShowNav((s) => !s)}
          className={`font-semibold text-slate-500 hover:text-slate-800 ${
            showNav ? "rotate-90" : "rotate-0"
          } transition-all duration-200`}
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
