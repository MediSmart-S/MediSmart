import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

const ChevLink = ({ children, href = "#" }) => {
  return (
    <Link
      href={href}
      className="flex justify-start items-center gap-2 text-md text-neutral-500 hover:text-primary-500 hover:-translate-x-1 will-change-transform transition-all duration-200"
    >
      <span>
        <LuChevronLeft />
      </span>
      <span>{children}</span>
    </Link>
  );
};

export default ChevLink;
