import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routes";
import { Suspense } from "react";
import Loader from "../components/Loader";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter(
  routes.map((route) => {
    return {
      ...route,
      element: route.needsAuth ? (
        <ProtectedRoute>
          <Suspense fallback={<Loader />}>{route.element}</Suspense>
        </ProtectedRoute>
      ) : (
        <Suspense fallback={<Loader />}>{route.element}</Suspense>
      ),
    };
  })
);

const Router = () => <RouterProvider router={router} />;

export default Router;
