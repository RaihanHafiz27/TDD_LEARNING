import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { PasswordPage } from "./pages/password";
import HomePage from "./pages/home";
import { ShoppingPage } from "./pages/shopping";
import { Layout } from "./components/layouts/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/password",
        element: <PasswordPage />,
      },
      {
        path: "/shopping",
        element: <ShoppingPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
