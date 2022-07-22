import React, {useEffect, useState} from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuthFirebase } from "../../hooks/authFirebase"

export const PrivateRoute = ({ redirectPath, children, type = "guest" }) => {
  
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));

  const path = redirectPath ? redirectPath : "/login";

  const parseJwt = (token) => {

    try{
        return JSON.parse(atob(token.split('.')[1]))
    }catch(error){
        return Promise.reject(error)
    }

  }

  if (type === "guest" && isLoggedIn) {
    return <Navigate to="/admin/dashboard" replace />;

  }

  if (type === "private" && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if(type === "private" && isLoggedIn) {
    const accessToken = localStorage.getItem("access_token")
    const { exp } = parseJwt(accessToken)
    const date = new Date();
    const currentTime = date.getTime();
    const expTime = new Date(exp * 1000).getTime();  

  }
  return children ? children : <Outlet />;
};
