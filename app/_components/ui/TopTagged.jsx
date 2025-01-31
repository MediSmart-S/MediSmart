"use client";

import Link from "next/link";
import PhoneSvg from "../svg/PhoneSvg";
import MailSvg from "../svg/MailSvg";
import Button from "./Button";
import useScrollTo from "@/app/_hooks/useScrollTo";

const TopTagged = () => {
  const { scrollToElement } = useScrollTo();

  return (
    <div className="container hidden md:flex justify-between items-center h-16">
      <div>
        <Button onClick={() => scrollToElement("appointment-section")}>
          رزرو نوبت
        </Button>
      </div>
      <div className="flex justify-start items-center gap-8">
        <Link
          href="#"
          className="flex justify-start items-center gap-2 font-thin text-slate-800 hover:text-primary-600 transition-all duration-200"
        >
          <span dir="ltr">+01 - 234 567 890</span>
          <PhoneSvg />
        </Link>
        <Link
          href="#"
          className="flex justify-start items-center gap-2 font-thin text-slate-800 hover:text-primary-600 transition-all duration-200"
        >
          <span>info@nischinto.com</span>
          <MailSvg />
        </Link>
      </div>
    </div>
  );
};

export default TopTagged;
