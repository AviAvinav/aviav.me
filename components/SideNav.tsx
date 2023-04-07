"use client";

import clsx from "clsx";
import Link from "next/link";
import { useCallback } from "react";
import Navbutton from "~/app/navbutton";
import { useStore } from "~/lib/store";

const SideNav = () => {
  const isNavOpen = useStore(useCallback((state) => state.isNavOpen, []));
  return (
    <div
      className={clsx(
        "min-h-screen min-w-screen text-gray-700 bg-emerald-200 -translate-x-full flex flex-row justify-between font-medium z-10 absolute top-0 left-0 right-0 px-10 sm:px-20 md:px-44",
        isNavOpen ? "translate-x-0" : "-translate-x-[calc(100% - 50px)])]",
        "transition-all duration-500 ease-in-out"
      )}
    >
      <div className="flex flex-col justify-between min-h-screen py-32">
        <ConsiousLink
          className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl sm:leading-tight lg:leading-[1.10] xl:leading-[1.15]"
          href="/"
        >
          Home
        </ConsiousLink>
        <Link
          className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl sm:leading-tight lg:leading-[1.10] xl:leading-[1.15]"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl sm:leading-tight lg:leading-[1.10] xl:leading-[1.15]"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl sm:leading-tight lg:leading-[1.10] xl:leading-[1.15]"
          href="/"
        >
          Contact
        </Link>
      </div>
      <div className="py-32">
        <Navbutton inNav />
      </div>
    </div>
  );
};

interface ConsiousLinkProps {
  className: string;
  href: string;
  children: React.ReactNode;
}

const ConsiousLink = ({ className, href, children }: ConsiousLinkProps) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default SideNav;
