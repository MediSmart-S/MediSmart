"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useRef } from "react";

const NavLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="font-semibold text-slate-500 hover:text-slate-800 duration-200"
    >
      {children}
    </Link>
  );
};

const NavigationBar = () => {
  const headerContainer = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(() => console.log("hello"), {
      // root: headerContainer.current,
      threshold: 0.5,
    });
    observer.observe(headerContainer.current);
  }, []);

  return (
    <div ref={headerContainer} className="container mt-6">
      <div className="sticky top-0 start-0 flex justify-between items-center">
        <div className="flex justify-start items-center gap-6">
          <NavLink href="#">خانه</NavLink>
          <NavLink href="#">درباره ما</NavLink>
          <NavLink href="#">قیمت ها</NavLink>
          <NavLink href="#">بلاگ ها</NavLink>
          <NavLink href="#">تماس با ما</NavLink>
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
