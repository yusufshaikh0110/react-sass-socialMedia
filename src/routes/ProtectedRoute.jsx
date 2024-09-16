import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useState } from "react";
import useAuth from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (currentUser === undefined) return <Loader />;

  if (!currentUser) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
