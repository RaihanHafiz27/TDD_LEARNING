import type { ReactNode } from "react";
import { Link } from "react-router";

export const ContentLayout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="grow flex justify-center items-center">
      <div className="w-full max-w-3xl bg-indigo-300/5 rounded-lg p-8">
        {/* Header & Back Button */}
        <div className="mb-6 flex items-center justify-between space-y-4">
          <h2 className="text-2xl font-bold text-slate-200">{title}</h2>
          <Link
            to="/"
            className=" text-slate-200 transition-transform duration-500 hover:scale-125 font-medium"
          >
            ← Menu
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};
