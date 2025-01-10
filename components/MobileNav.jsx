"use client";

import {
  Sheet,
  SheetClose,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const activePath = usePathname();
  return (
    <>
      <Sheet className="bg-primary">
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent-default" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetTitle className="text-2xl text-center mt-32 mb-40">
            <div>
              <Link href="/">
                <h1 className="text-4xl font-semibold text-white">
                  Aden<span className="text-accent-default">.</span>
                </h1>
              </Link>
            </div>
          </SheetTitle>
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    activePath === link.path &&
                    "border-b-2 text-accent-default border-accent-default"
                  } capitalize hover:text-accent-hover text-xl transition-all`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
