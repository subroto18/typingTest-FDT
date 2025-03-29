import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import ErrorPage from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // Default child for "/"
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const index = () => {
  return <RouterProvider router={router} />;
};

export default index;
