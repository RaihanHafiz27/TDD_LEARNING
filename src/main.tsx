import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { PasswordPage } from "./pages/password";
import HomePage from "./pages/home";
import { ShoppingPage } from "./pages/cart";
import { PageLayout } from "./components/layouts/PageLayout";
import { EmployeePage } from "./pages/employee";
import { PaginationPage } from "./pages/pagination";
import { TimeView } from "./pages/time";

const router = createBrowserRouter([
  {
    element: <PageLayout />,
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
      {
        path: "/logic-time",
        element: <TimeView />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
