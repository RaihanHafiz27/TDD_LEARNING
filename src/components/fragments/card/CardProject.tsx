import { Link } from "react-router";

type Level = "beginner" | "intermediate" | "advanced";

export interface CardType {
  id: number;
  link: string;
  title: string;
  level: Level;
  desc: string;
}

const statusColor: Record<Level, string> = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800",
  advanced: "bg-red-100 text-red-800",
};

export const CartProject = ({ link, title, level, desc }: CardType) => {
  return (
    <Link
      to={link}
      className="group block p-6 bg-indigo-300/5  rounded-lg transition-all duration-500 hover:scale-105"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-500 group-hover:text-slate-200 transition-all duration-500">
          {title}
        </h3>
        <span
          className={`${statusColor[level]} text-xs font-semibold px-2 py-1 rounded capitalize`}
        >
          {level}
        </span>
      </div>
      <p className="text-gray-500 group-hover:text-slate-300 transition-all duration-500 text-sm tracking-wide leading-relaxed">
        {desc}
      </p>
    </Link>
  );
};
