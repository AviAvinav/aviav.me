import Link from "next/link";
import { useRouter } from "next/router";

const SideNav = () => {
  return (
    <div className="min-h-screen min-w-screen text-gray-700 font-medium flex flex-col justify-between -z-10 bg-emerald-200 absolute top-0 left-0 right-0 py-32 px-10 sm:px-20 md:px-44">
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
