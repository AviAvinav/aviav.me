import { SiGithub } from "react-icons/si";
import Underline from "./Underline";

interface ProjectProps {
  title: string;
  description: string;
  demoLink?: string;
  githubLink: string;
}

const Project = ({
  title,
  description,
  demoLink,
  githubLink,
}: ProjectProps) => {
  return (
    <div className="p-5 bg-zinc-400 bg-opacity-20 relative">
      <h4 className="text-xl text-white mb-3">{title}</h4>
      <p className="mb-3">{description}</p>
      {/* {demoLink && <a href={demoLink}>Demo</a>} */}
      {githubLink && <a href={githubLink}><SiGithub className="h-6 w-6 text-white" /></a>}
      <Underline />
    </div>
  );
};

export default Project;
