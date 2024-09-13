import { lazy } from "react";

const Login = lazy(() => import("../pages/login/login"));
const Register = lazy(() => import("../pages/register/Register"));

const routes = [
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
