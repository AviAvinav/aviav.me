import clsx from "clsx";
import Underline from "~/components/Underline";
import {
  SiAdobexd,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Skill from "~/components/Skill";
import Navbutton from "./navbutton";
import Button from "~/components/Button";
import Project from "~/components/Project";
import Footer from "./footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avi Avinav",
  description: "Avi Avinav's portfolio website",
  authors: [{ name: "Avi Avinav" }],
  themeColor: "#a7f3d0",
  openGraph: {},
  verification: {},
  appleWebApp: {},
};

export default function Home() {
  return (
    <main className="relative z-0">
      <div className="text-zinc-400 selection:bg-emerald-200 selection:text-black bg-black relative">
        <div className="fixed left-0 top-0 w-screen z-20 h-20 md:h-screen md:w-20 flex items-center md:items-start md:justify-center md:pt-32 px-10 sm:px-20 md:px-0 bg-emerald-200">
          <Navbutton />
        </div>
        <div
          className={clsx(
            "h-screen w-screen z-10 flex flex-col px-10 sm:px-20 md:px-44 relative mb-8"
          )}
        >
          <header className="pt-32 pb-6 text-2xl md:text-3xl font-medium text-zinc-200">
            Hi 👋, I&apos;m Avi!
          </header>
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl relative font-medium sm:leading-tight lg:leading-[1.10] xl:leading-[1.15]">
            I am a{" "}
            <span className="relative text-gray-50">
              Full Stack Developer
              <Underline />
            </span>{" "}
            with a passion for building beautiful and intuitive user interfaces
            <span className="text-emerald-200 text-5xl lg:text-7xl xl:text-9xl bottom-0.5 xl:bottom-0 absolute ml-2">
              .
            </span>
          </h1>
          <div className="w-full flex items-center justify-center pt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={65}
              height={45}
              className="scale-150"
            >
              <g
                fill="none"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeMiterlimit={10}
              >
                <path d="M9.358 37.549c-.399-2.15-.301-4.137.191-5.941.491-1.807 1.378-3.432 2.555-4.861 1.176-1.432 2.642-2.665 4.293-3.688 1.652-1.023 3.49-1.838 5.409-2.426a25.31 25.31 0 0 1 3.471-.803 21.716 21.716 0 0 1 3.583-.267c1.196.014 2.387.136 3.548.391 1.16.254 2.291.638 3.367 1.172.66.328 1.436.827 2.184 1.44.746.613 1.465 1.342 2.004 2.129s.902 1.633.939 2.479-.25 1.694-1.012 2.488a3.388 3.388 0 0 1-2.074 1.026c-.771.099-1.598-.021-2.416-.268-.818-.246-1.627-.623-2.36-1.041a14.311 14.311 0 0 1-1.9-1.301 17.409 17.409 0 0 1-2.304-2.279 18.003 18.003 0 0 1-1.871-2.699c-.54-.957-.99-1.963-1.331-2.998a14.77 14.77 0 0 1-.681-3.167 12.406 12.406 0 0 1 .137-3.509 11 11 0 0 1 1.09-3.141c3.246-6.142 10.959-7.36 17.227-7.643 3.102-.139 6.207-.198 9.311-.239 3.193-.045 6.385.058 9.568.309" />
                <path
                  strokeLinejoin="round"
                  d="M2.716 33.124c3.721 2.325 4.349 6.603 7.402 9.481 1.046-3.027 3.443-9.07 6.125-11.113"
                />
              </g>
            </svg>
          </div>
          <Button ariaLabel="Get In Touch" href="/#footer">
            Get In Touch
          </Button>
        </div>
        <div className="w-screen z-10 flex flex-col px-10 sm:px-20 md:px-44 relative">
          <h2 className="text-zinc-400 text-[2rem] sm:text-3xl lg:text-4xl xl:text-5xl pt-32 font-medium relative">
            These are the{" "}
            <span className="relative text-gray-50">
              technologies
              <Underline />
            </span>{" "}
            I use:
          </h2>
          <div className="w-full grid grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-x-16 xl:gap-x-24 gap-y-12 py-12 text-zinc-400">
            <Skill Icon={SiReact} name="react" />
            <Skill Icon={SiNextdotjs} name="nextjs" />
            <Skill Icon={SiTailwindcss} name="tailwindcss" />
            <Skill Icon={SiNodedotjs} name="nodejs" />
            <Skill Icon={SiTypescript} name="typescript" />
            <Skill Icon={SiJavascript} name="javascript" />
            <Skill Icon={SiHtml5} name="HTML" />
            <Skill Icon={SiCss3} name="CSS" />
            <Skill Icon={SiGit} name="git" />
            <Skill Icon={SiGithub} name="github" />
            <Skill Icon={SiFigma} name="figma" />
            <Skill Icon={SiAdobexd} name="adobexd" />
            <Skill Icon={SiPostgresql} name="postgresql" />
            <Skill Icon={SiSupabase} name="supabase" />
            <Skill Icon={SiMongodb} name="mongodb" />
            <Skill Icon={SiFirebase} name="firebase" />
          </div>
        </div>
        <div className="w-screen z-10 flex flex-col px-10 sm:px-20 md:px-44 relative">
          <h2 className="text-zinc-400 text-[2rem] sm:text-3xl lg:text-4xl xl:text-5xl pt-44 font-medium relative">
            Check out some{" "}
            <span className="relative text-gray-50">
              projects
              <Underline />
            </span>{" "}
            I have worked on:
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 xl:gap-x-12 gap-y-12 py-12 text-zinc-400">
            <Project
              title="Aloria UI"
              description="Aloria UI is a open-source react library to use amazing components, hooks, fonts and icons."
              githubLink="https://github.com/AviAvinav/aloria-ui"
            />
            <Project
              title="Chai"
              description="A simple, opinionated react-native stack with Typescript, Expo-router, Tailwind & Zustand."
              githubLink="https://github.com/AviAvinav/chai"
            />
            <Project
              title="Remix, Medusa Ecommerce Website"
              description=" An ecommerce store with Remix, Medusa & Strapi CMS."
              githubLink="https://github.com/AviAvinav/aloria-ui"
            />
            <Project
              title="DiscussionOwl"
              description="DiscussionOwl is a discussion forum built for students to help each other with React, Bootstrap & Firebase."
              githubLink="https://github.com/AviAvinav/DiscussionOwl"
            />
            <Project
              title="Netflix Clone"
              description="A clone of the netflix mobile app created with react native and styled components."
              githubLink="https://github.com/AviAvinav/Netflix-Clone"
            />
            <Project
              title="Code Editor"
              description="A simple online code editor made with react and codemirror that gives a live preview."
              githubLink="https://github.com/AviAvinav/Avi-Code-Editor"
            />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
