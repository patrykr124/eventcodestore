import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/assets/images/logo.svg";
function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row ">
        <Link href="/">
          <Image src={Logo} alt="logo" width={120} height={38} />
        </Link>
        <p>2023 EventCoders. ALl Rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
