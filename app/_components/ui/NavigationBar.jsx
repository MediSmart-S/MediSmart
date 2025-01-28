"use client";

import Link from "next/link";
import Logo from "./Logo";

export const NavLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="font-semibold text-slate-500 hover:text-slate-800 duration-200"
    >
      {children}
    </Link>
  );
};

export const navigationLinks = [
  {
    placeholder: "خانه",
    href: "#",
  },
  {
    placeholder: "درباره ما",
    href: "#",
  },
  {
    placeholder: "قیمت ها",
    href: "#",
  },
  {
    placeholder: "بلاگ ها",
    href: "#",
  },
  {
    placeholder: "تماس با ما",
    href: "#",
  },
];

const NavigationBar = () => {
  return (
    <div className="container relative z-30 bg-white pt-6 pb-4">
      <div className="flex justify-center md:justify-between items-center">
        <div className="hidden md:flex justify-start items-center gap-6">
          {navigationLinks.map(({ href, placeholder }, i) => (
            <NavLink key={i} href={href}>
              {placeholder}
            </NavLink>
          ))}
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
