import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/authPage/AuthPage";
import HomePage from "../pages/homePage/HomePage";

function AppBody() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default AppBody;
