import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopLogo from "../../../public/assets/airbnb-desktop.png";
import MobileLogo from "../../../public/assets/airbnb-mobile.webp";
import UserNav from "./UserNav";

const NavBar = () => {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src={DesktopLogo}
            width={2560}
            height={800}
            alt="Desktop Logo"
            className="w-32 hidden lg:block"
          />
          <Image
            src={MobileLogo}
            alt="Mobile Logo"
            className="block lg:hidden w-12"
          />
        </Link>
        <div className="rounded-full border px-5 py-2"> Search</div>

        <UserNav />
      </div>
    </nav>
  );
};

export default NavBar;
