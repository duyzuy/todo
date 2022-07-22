import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import Dashboard from "../features/dashboard/Dashboard";
import Profile from "../features/profile/Profile";
import User from "../features/user/User";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";

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
    icon: DashboardIcon,
  },
  {
    path: "user",
    name: "User",
    component: User,
    icon: GroupIcon,
  },
  {
    path: "profile",
    name: "Profile",
    component: Profile,
  },
];
