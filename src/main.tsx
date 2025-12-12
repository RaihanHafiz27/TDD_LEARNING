import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router"; // Import dari satu sumber
// import HomePage from "./pages/Home";
import { PasswordPage } from "./pages/password";
import HomePage from "./pages/home";
// import { Navbar } from "./components/fragments/navbar/Navbar";
// import HomePage from "./pages/home";
// import { PasswordForm } from "./features/PasswordChecker/PasswordForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // Kita tambahkan rute Password di sini agar link di Home berfungsi
  {
    path: "/password",
    element: <PasswordPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Layout wrapper untuk styling global (opsional, biar rapi) */}
    <div className="min-h-screen bg-gray-900 text-gray-800 font-sans p-6 relative space-y-4">
      <h1>
        <a href="/" className="text-xl font-bold text-slate-100">
          Learning Lab
        </a>
      </h1>
      <div className="w-full h-full grid place-items-center">
        {/* Navbar Sederhana (Hardcoded sementara karena App.tsx dihapus) */}
        {/* <Navbar /> */}

        <RouterProvider router={router} />
        <div className="absolute bottom-4 right-4 flex items-center gap-3">
          {/* Text Arrow */}
          <div
            className="flex items-center text-white"
            style={{
              animation: "bounceRight 1s infinite",
            }}
          >
            <div className="bg-sky-600 px-4 py-2 rounded-l-lg">
              You can see the codes here.
            </div>
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-sky-600"></div>
          </div>

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/username/repository"
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
  </StrictMode>
);
