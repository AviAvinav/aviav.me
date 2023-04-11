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
        "max-h-screen min-w-screen bg-emerald-200 -translate-x-full flex flex-row justify-between font-medium z-10 fixed top-0 left-0 right-0 bottom-0 px-10 sm:px-20 md:px-44",
        isNavOpen ? "translate-x-0" : "-translate-x-[calc(100% - 50px)])]",
        "transition-all duration-500 ease-in-out"
      )}
    >
      <div className="flex flex-col justify-between min-h-screen py-32">
        <ConsiousLink
          href="/"
        >
          Home
        </ConsiousLink>
        <ConsiousLink
          href="/projects"
        >
          Projects
        </ConsiousLink>
        <ConsiousLink
          href="/blog"
        >
          Blog
        </ConsiousLink>
        <ConsiousLink
          href="/#footer"
        >
          Contact
        </ConsiousLink>
      </div>
      <div className="py-32">
        <Navbutton inNav />
      </div>
    </div>
  );
};

interface ConsiousLinkProps {
  href: string;
  children: React.ReactNode;
}

const ConsiousLink = ({ href, children }: ConsiousLinkProps) => {
  const setIsNavOpen = useStore(useCallback((state) => state.setIsNavOpen, []));

  return (
    <Link onClick={setIsNavOpen} href={href} className={clsx("text-[2.5rem] text-gray-700 sm:text-5xl lg:text-6xl xl:text-7xl sm:leading-tight lg:leading-[1.10] xl:leading-[1.15]")}>
      {children}
    </Link>
  );
};

export default SideNav;
