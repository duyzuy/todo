import React from "react";
import { Navigate, Outlet } from "react-router-dom";
export const PrivateRoute = ({ redirectPath, children, type = "guest" }) => {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));

  const path = redirectPath ? redirectPath : "/login";

  if (type === "guest" && isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  if (type === "private" && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};
