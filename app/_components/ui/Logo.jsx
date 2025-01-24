import Image from "next/image";

import logo from "@/public/images/logo.png";

const Logo = () => {
  return <Image src={logo} alt="MediSmart Logo" />;
};

export default Logo;
