import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../features/auth/authSlice";
import { auth } from "../../firebaseConfig";
export const PrivateRoute = ({ redirectPath, children, type = "guest" }) => {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));

  const path = redirectPath ? redirectPath : "/login";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parseJwt = (token) => {

    try{
        return JSON.parse(atob(token.split('.')[1]))
    }catch(error){
        return Promise.reject(error)
    }

}

  if (type === "guest" && isLoggedIn) {
    return <Navigate to="/admin" replace />;
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
    // auth.currentUser.getIdToken()
    // .then( (idToken) => {
    //   console.log(idToken)
    // }).catch(function(error) {
    //   // Handle error
    //   console.log(error)
    // });
    console.log(parseJwt(accessToken))
   
    console.log('1')
    if(expTime > currentTime){
      
    }else{
     
       dispatch(authAction.logOut({onSuccess: () => {navigate("/login")}}))
    }
   
  }

  return children ? children : <Outlet />;
};
