import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaPinterestSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ChevLink from "./ChevLink";
import GoUpButton from "./GoUpButton";

const usefulLinks = [
  {
    placeholder: "سوالات",
    href: "#",
  },
  {
    placeholder: "مقالات",
    href: "#",
  },
  {
    placeholder: "جدول زمانی هفته",
    href: "#",
  },
  {
    placeholder: "شرایط و ضوابط",
    href: "#",
  },
];

const departmentLinks = [
  {
    placeholder: "توانبخشی",
    href: "#",
  },
  {
    placeholder: "تجزیه و تحلیل آزمایشگاهی",
    href: "#",
  },
  {
    placeholder: "جراحی لیفت صورت",
    href: "#",
  },
  {
    placeholder: "لیپوساکشن",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#f9fafc] bg-footer bg-center bg-cover bg-no-repeat">
      <div className="container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 py-20">
        <div className="col-span-1 sm:col-span-3 lg:col-span-1 flex flex-col justify-start items-start">
          <div>
            <Image src={logo} alt="لوگو مدی اسمارت" />
          </div>
          <p className="text-neutral-500 my-4">
            لورم ایپسوم به سادگی متن ساختگی صنعت چاپ و حروفچینی است. لورم ایپسوم
            متن ساختگی استاندارد صنعت. لورم ایپسوم به سادگی متن ساختگی صنعت چاپ
            و حروفچینی است. لورم ایپسوم
          </p>
          <div className="flex justify-start items-center gap-3">
            <Link href="#" className="text-primary-500">
              <FaFacebookSquare className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-primary-500">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-primary-500">
              <FaPinterestSquare className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-primary-500">
              <FaSquareXTwitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl text-primary-500 mb-0">
            لینک های مفید
          </h1>
          <div className="h-px w-full max-w-40 bg-neutral-200 my-4"></div>
          <div className="flex flex-col justify-start items-start gap-3">
            {usefulLinks.map(({ placeholder, href }, i) => (
              <ChevLink key={i} href={href}>
                {placeholder}
              </ChevLink>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl text-primary-500 mb-0">
            بخش های درمانی
          </h1>
          <div className="h-px w-full max-w-40 bg-neutral-200 my-4"></div>
          <div className="flex flex-col justify-start items-start gap-3">
            {departmentLinks.map(({ placeholder, href }, i) => (
              <ChevLink key={i} href={href}>
                {placeholder}
              </ChevLink>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl text-primary-500 mb-0">
            راه های ارتباطی
          </h1>
          <div className="h-px w-full max-w-40 bg-neutral-200 my-4"></div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="flex justify-start items-start gap-2">
              <span className="font-semibold text-neutral-700">آدرس:</span>
              <span className="text-neutral-500">
                استان، شهر، خیابان، کوچه، پلاک
              </span>
            </div>
            <div className="flex justify-start items-start gap-2">
              <span className="font-semibold text-neutral-700">ایمیل:</span>
              <span className="text-neutral-500">email@example.com</span>
            </div>
            <div className="flex justify-start items-start gap-2">
              <span className="font-semibold text-neutral-700">تلفن:</span>
              <span className="text-neutral-500 text-right" dir="ltr">
                (011) 12345678 <br />
                (+98) 9123456789
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-400/10 w-full">
        <div className="container flex justify-between items-center py-5">
          <p className="text-sm text-neutral-500">
            کپی رایت 1403. طراحی شده توسط طاها
          </p>
          <GoUpButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
