import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import MobileMenuToggle from "../../public/assets/icons/menu.svg";
import Logo from "../../public/assets/images/logo.svg";
import NavItems from "./NavItems";

function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={MobileMenuToggle}
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden ">
          <Image src={Logo} width={128} height={38} alt="logo" />
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
