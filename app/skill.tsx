import type { IconType } from "react-icons";

interface SkillProps {
  Icon: IconType;
  name: string;
}

const Skill = ({ Icon, name }: SkillProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-2 relative group">
      <Icon className="w-full h-full text-gray-300 lg:group-hover:scale-110 lg:group-hover:text-gray-50 transition ease-in-out duration-100" />
      <p className="capitalize text-gray-300 text-[1.4rem] sm:text-lg lg:text-xl xl:text-2xl font-medium lg:group-hover:text-gray-50 transition ease-in-out duration-100">
        {name}
      </p>
    </div>
  );
};

export default Skill;
