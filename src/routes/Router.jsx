import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routes";
import { Suspense } from "react";
import Loader from "../components/Loader";

const router = createBrowserRouter(
  routes.map((route) => {
    return {
      ...route,
      element: <Suspense fallback={<Loader />}>{route.element}</Suspense>,
    };
  })
);

const Router = () => <RouterProvider router={router} />;

export default Router;
