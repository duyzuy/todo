import React from "react";
import {
  Box,
  Toolbar,
  IconButton,
  ListItemIcon,
  List,
  ListItemButton,
  Divider,
  ListItemText,
  Drawer,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { authAction } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../constants/routes";
import DescriptionIcon from "@mui/icons-material/Description";
import { CustomLink } from "../Common";
const activeStyle = {
  backgroundColor: "red",
};
const SideBar = ({ openSidebar, drawerWidth, toggleDrawer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(
      authAction.logOut({
        onSuccess: () => {
          navigate("/login", { state: null });
        },
        onError: (error) => {
          console.log(error);
        },
      })
    );
  };

  return (
    <Drawer
      className={openSidebar ? "admin__sidebar" : "admin__sidebar showless"}
      variant="permanent"
      open={openSidebar}
      onClose={toggleDrawer}
      sx={{
        width: openSidebar ? drawerWidth : "60px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: openSidebar ? drawerWidth : "60px",
          boxSizing: "border-box",
          transition: "all linear 240ms",
        },
        zIndex: 1,
      }}
    >
      <Box className="admin__sidebar__inner">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav" className="nav__items">
          {PRIVATE_ROUTES.map((route, index) => {
            const IconMenu = route.icon || DescriptionIcon;
            return (
              <CustomLink
                path={`admin/${route.path}`}
                className="nav__link"
                key={index}
              >
                <span className="nav__item__icon">
                  <IconMenu />
                </span>
                <p className="nav__item__text">{route.name}</p>
              </CustomLink>
            );
          })}
          <Divider sx={{ my: 1 }} />
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="logout" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
