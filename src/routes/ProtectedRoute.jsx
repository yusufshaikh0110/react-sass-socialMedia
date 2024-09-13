import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState();

  setTimeout(() => {
    setisLoggedIn(false);
  }, 2000);

  if (isLoggedIn === undefined) return <Loader />;

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
