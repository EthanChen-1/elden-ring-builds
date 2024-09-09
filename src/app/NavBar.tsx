"use client";

import Link from "next/link";
import React from "react";
import { MdElderly } from "react-icons/md";
import { FaRing } from "react-icons/fa";
import { MdBuildCircle } from "react-icons/md";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function NavBar() {
  const currentPath = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Builds", href: "/builds" },
  ];
  return (
    <nav className="flex space-x-6 border-b-2 px-5 h-14 items-center">
      <Link href="/">
        <MdElderly />
        <FaRing />
        <MdBuildCircle />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
              "font-bold": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
