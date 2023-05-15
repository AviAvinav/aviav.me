import { GithubLogo, LinkedinLogo, DevToLogo, Envelope, TwitterLogo } from "@phosphor-icons/react"
import Form from "./form";

const Footer = () => {
	return (
		<footer
			id="footer"
			className="text-center flex flex-col md:flex-row justify-between bg-zinc-400 bg-opacity-20 px-10 sm:px-20 md:px-44 py-12"
		>
			<Form />
			<div className="flex flex-col justify-center flex-1 space-y-8">
				<div className="flex flex-row justify-center space-x-8 items-center">
					<a
						className="transition ease-in-out duration-100 lg:hover:scale-125"
						aria-label="Go to Github"
						href="https://github.com/AviAvinav"
					>
						<GithubLogo size={28} />
					</a>
					<a
						className="transition ease-in-out duration-100 lg:hover:scale-125"
						aria-label="Go to Linkedin"
						href="https://linkedin.com/in/avi-avinav"
					>
						<LinkedinLogo size={28} />
					</a>
					<a
						className="transition ease-in-out duration-100 lg:hover:scale-125"
						aria-label="Go to Twitter"
						href="https://twitter.com/@aviavinav0"
					>
						<TwitterLogo size={28} />
					</a>
					<a
						className="transition ease-in-out duration-100 lg:hover:scale-125"
						aria-label="Email Me"
						href="mailto:hi@aviav.me"
					>
						<Envelope size={28} />
					</a>
					<a
						className="transition ease-in-out duration-100 lg:hover:scale-125"
						aria-label="Email Me"
						href="https://dev.to/aviavinav"
					>
						<DevToLogo size={28} />
					</a>
				</div>
				<p>
					Copyright © 2023 | Made with 💖 by{" "}
					<a
						className="underline decoration-dotted text-gray-300"
						href="https://github.com/aviavinav"
						aria-label="link to my github"
					>
						Avi Avinav
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
