import { lazy } from "react";

const Layout = lazy(() => import("../components/layout/Layout"));
const Login = lazy(() => import("../pages/login/login"));
const Register = lazy(() => import("../pages/register/Register"));
const Home = lazy(() => import("../pages/home/Home"));
const Profile = lazy(() => import("../pages/profile/Profile"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
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
