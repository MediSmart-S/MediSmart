import Image from "next/image";

import miniLogo from "@/public/images/mini-logo.png";

const SideLine = () => {
  return <span className="w-16 h-[2px] rounded-full bg-primary-500"></span>;
};

const LogoDivider = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <SideLine />
      <Image src={miniLogo} alt="logo" className="animate-spin3d" />
      <SideLine />
    </div>
  );
};

export default LogoDivider;
