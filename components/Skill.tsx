import type { IconType } from "react-icons";

interface SkillProps {
  Icon: IconType;
  name: string;
}

const Skill = ({ Icon, name }: SkillProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
      <Icon className="w-full h-full" />
      <p className="capitalize text-[1.5rem] sm:text-lg lg:text-xl xl:text-2xl font-medium">
        {name}
      </p>
    </div>
  );
};

export default Skill;
