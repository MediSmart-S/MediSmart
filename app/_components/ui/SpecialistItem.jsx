import Image from "next/image";

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaPinterestSquare,
} from "react-icons/fa";
import { FaLink, FaSquareXTwitter } from "react-icons/fa6";

import contactBg from "@/public/images/shapes/member-shape.svg";
import Link from "next/link";

const SpecialistItem = ({ image, fullName, department }) => {
  const linkClassName =
    "flex justify-center items-center text-white hover:opacity-80 transition-all duration-500";
  const linkIconClassName =
    "w-0 h-0 group-hover/doctor-item:w-6 group-hover/doctor-item:h-6 transition-all duration-500";

  return (
    <div className="group/doctor-item flex justify-center items-center w-full rounded-md border border-neutral-200 overflow-hidden">
      <div className="flex flex-col justify-start w-full">
        <div className="relative w-full h-96 overflow-hidden">
          <Link
            href="#"
            className="absolute top-4 right-4 w-8 h-8 p-2 text-white bg-primary-500 group-hover/doctor-item:opacity-100 opacity-0 rounded-md transition-all duration-300 z-10"
          >
            <FaLink />
          </Link>

          <Image
            src={image}
            fill
            alt="دکتر ما"
            className="group-hover/doctor-item:scale-105 object-fill transition-all duration-500"
          />
          <Image
            src={contactBg}
            alt="موج سبز"
            className="group-hover/doctor-item:opacity-100 opacity-0 absolute bottom-0 left-0 w-full transition-all duration-500"
          />
          <div className="flex justify-center items-center gap-4 absolute bottom-8 left-0 w-full">
            <Link href="#" className={linkClassName}>
              <FaDribbbleSquare className={linkIconClassName} />
            </Link>
            <Link href="#" className={linkClassName}>
              <FaSquareXTwitter className={linkIconClassName} />
            </Link>
            <Link href="#" className={linkClassName}>
              <FaPinterestSquare className={linkIconClassName} />
            </Link>
            <Link href="#" className={linkClassName}>
              <FaLinkedin className={linkIconClassName} />
            </Link>
            <Link href="#" className={linkClassName}>
              <FaFacebookSquare className={linkIconClassName} />
            </Link>
          </div>
        </div>
        <div className="py-3 border-t border-neutral-200">
          <h4 className="font-bold text-xl text-neutral-800 text-center">
            {fullName}
          </h4>
          <p className="text-neutral-500 text-center">بخش {department}</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialistItem;
