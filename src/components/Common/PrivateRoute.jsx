import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
export const PrivateRoute = ({ redirectPath, children }) => {

  const isLoggedIn = Boolean(localStorage.getItem("access_token"))

  const path = redirectPath ? redirectPath : "/login"


  if(!isLoggedIn){
    return <Navigate to={path} replace/>;
  }

  return children ? children : <Outlet />;

}
