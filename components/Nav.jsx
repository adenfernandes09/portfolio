"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const activePath = usePathname();
  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "resume", path: "/resume" },
    { name: "contact", path: "/contact" },
  ];
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === activePath &&
            "text-accent-default border-b-2 border-accent-default"
          } capitalize font-medium hover:text-accent-hover transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
