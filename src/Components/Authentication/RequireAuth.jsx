import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Sheared/Loading";

const RequireAuth = ({ children }) => {
  const token = localStorage.getItem("jwtToken");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // You can add logic here to verify token validity by calling the backend if needed.

  return children;
};

export default RequireAuth;
