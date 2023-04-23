import { SiGithub } from "react-icons/si";
import Underline from "./underline";

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
      <h3 className="text-xl text-white mb-3">{title}</h3>
      <p className="mb-3">{description}</p>
      {/* {demoLink && <a href={demoLink}>Demo</a>} */}
      {githubLink && (
        <a aria-label="Github Link" href={githubLink}>
          <SiGithub className="h-6 w-6 text-white" />
        </a>
      )}
      <Underline />
    </div>
  );
};

export default Project;
