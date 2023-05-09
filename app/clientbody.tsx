"use client";

import clsx from "clsx";
import { Space_Grotesk } from "next/font/google";
import { Suspense, useCallback } from "react";
import { Toaster } from "react-hot-toast";
import SideNav from "~/app/sidenav";
import { useStore } from "~/lib/store";
import Footer from "~/app/footer";
import { TbLoader2 } from "react-icons/tb";

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
			<Suspense fallback={<Loading />}>
				<SideNav />
				{children}
				<Footer />
				<Toaster position="bottom-right" containerStyle={{ margin: 50 }} />
			</Suspense>
		</body>
	);
};

const Loading = () => {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center space-y-3 bg-black">
			<TbLoader2 className="h-20 w-20 animate-spin" />
			<p className="text-2xl">Loading...</p>
		</div>
	);
};

export default ClientBody;
