import type { IconType } from "react-icons";

interface SkillProps {
  Icon: IconType;
  name: string;
}

const Skill = ({ Icon, name }: SkillProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
      <Icon className="w-full h-full text-gray-300" />
      <p className="capitalize text-gray-300 text-[1.4rem] sm:text-lg lg:text-xl xl:text-2xl font-medium">
        {name}
      </p>
    </div>
  );
};

export default Skill;
