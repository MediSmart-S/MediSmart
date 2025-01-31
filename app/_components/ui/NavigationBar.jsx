import Logo from "./Logo";
import NavLink from "./NavLink";

export const navigationLinks = [
  {
    placeholder: "جدول زمانی",
    href: "about-section",
  },
  {
    placeholder: "بخش های درمانی",
    href: "departments-section",
  },
  {
    placeholder: "رزرو قرار",
    href: "appointment-section",
  },
  {
    placeholder: "متخصصان",
    href: "specialists-section",
  },
  {
    placeholder: "نظر بیماران",
    href: "patients-section",
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
