import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { PasswordPage } from "./pages/password";
import HomePage from "./pages/home";
import { ShoppingPage } from "./pages/cart";
import { Layout } from "./components/layouts/Layout";
import { EmployeePage } from "./pages/employee";
import { PaginationPage } from "./pages/pagination";

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
        path: "/cart",
        element: <ShoppingPage />,
      },
      {
        path: "/employees",
        element: <EmployeePage />,
      },
      {
        path: "/pagination",
        element: <PaginationPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
