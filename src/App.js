import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "./components/Layout";
import { NotFound, PrivateRoute } from "./components/Common";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import Dashboard from "./features/dashboard/Dashboard";
import User from "./features/user/User";
const App = () => {

  return (
      <Routes>
      {/* <Route path="/" element={<HomePage />}></Route> */}

      <Route element={<PrivateRoute type="guest" />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/register" element={<RegisterPage />} />
      <Route element={<PrivateRoute type="private" />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />}/>
          <Route path="/admin/user" element={<User />}/>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
