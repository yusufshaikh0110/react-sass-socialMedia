import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  setTimeout(() => {
    setIsLoggedIn(true);
  }, 500);

  if (isLoggedIn === undefined) return <Loader />;

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
