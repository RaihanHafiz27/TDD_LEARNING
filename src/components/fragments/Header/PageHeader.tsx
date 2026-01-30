import { Link } from "react-router";

export const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="mb-6 flex items-center justify-between space-y-4">
      <h2 className="text-2xl font-bold text-slate-200">{title}</h2>
      <Link
        to="/"
        className=" text-slate-200 transition-transform duration-500 hover:scale-125 font-medium"
      >
        ← Menu
      </Link>
    </div>
  );
};
