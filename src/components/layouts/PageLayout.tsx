import { Outlet } from "react-router";

export const PageLayout = () => {
  return (
    <div className=" min-h-screen bg-linear-to-br from-slate-900 via-indigo-900 to-slate-800 animate-gradient text-gray-800 font-sans p-6 space-y-4 flex flex-col relative">
      <h1>
        <a href="/" className="text-xl font-bold text-slate-100">
          Learning Lab
        </a>
      </h1>
      <div className="flex grow">
        <Outlet />
        <div className="fixed bottom-4 right-4 flex items-center gap-3">
          {/* Text Arrow */}
          <div
            className="flex items-center text-white"
            style={{
              animation: "bounceRight 1s infinite",
            }}
          >
            <div className="bg-indigo-600 px-4 py-2 rounded-l-lg">
              You can see the codes here.
            </div>
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-indigo-600"></div>
          </div>

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/RaihanHafiz27/TDD_LEARNING"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-80"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-10 h-10 bg-slate-200 rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
