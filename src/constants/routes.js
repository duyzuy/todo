import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import Dashboard from "../features/dashboard/Dashboard";
import Profile from "../features/profile/Profile";
import User from "../features/user/User";

export const AUTH_ROUTES = [
  {
    path: "login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "register",
    name: "Register",
    component: RegisterPage,
  },
];

export const PRIVATE_ROUTES = [
  {
    path: "dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "user",
    name: "User",
    component: User,
  },
  {
    path: "profile",
    name: "Profile",
    component: Profile,
  },
];
