"use client";

import clsx from "clsx";
import { Space_Grotesk } from "next/font/google";
import { useCallback } from "react";
import { Toaster } from "react-hot-toast";
import SideNav from "~/app/sidenav";
import { useStore } from "~/lib/store";
import Footer from "~/app/footer";
import { Analytics } from "@vercel/analytics/react";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

const ClientBody = ({ children }: { children: React.ReactNode }) => {
  const isNavOpen = useStore(useCallback((state) => state.isNavOpen, []));
  return (
    <body
      className={clsx(
        "text-zinc-400 selection:bg-emerald-200 selection:text-black bg-black relative overflow-x-hidden",
        grotesk.className,
        isNavOpen ? "overflow-y-hidden" : "overflow-y-auto"
      )}
    >
      <SideNav />
      {children}
      <Footer />
      <Toaster position="bottom-right" containerStyle={{ margin: 50 }} />
      <Analytics />
    </body>
  );
};

export default ClientBody;
