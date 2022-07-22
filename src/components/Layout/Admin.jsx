import React, { useState } from "react";
import { authAction } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { Button, Container, Box, Toolbar, IconButton, Typography, Badge, ListItemIcon, List, ListItemButton, Divider, ListItemText, AppBar, Drawer } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications"
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import "./admin.scss";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

export const AdminLayout = ({ childen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(authAction.logOut({ 
      onSuccess: () => { navigate("/login", { state: null })},
      onError: (error) => {console.log(error)}

     }));
  };
  const [openSidebar, setOpenSidebar] = useState(true)

  const toggleDrawer = () => {
    setOpenSidebar(!openSidebar)
  }
  const activeStyle = {
    backgroundColor: "red"
  }
  return (
    <Box className="admin" component="main">

        <Box className="admin__wrapper" sx={{display: "flex"}}>
          <AppBar className="admin__header"
              sx={{
                position: "absolute",
                width: `${openSidebar ? `calc(100% - ${drawerWidth}px)` : "100%"}`,
                transition: "all linear 240ms"
              }}
            >
              <Box className="admin__header__inner">
                <Toolbar
                    sx={{
                      pr: '24px', // keep right padding when drawer closed
                    }}
                  >
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      onClick={toggleDrawer}
                      sx={{
                        marginRight: '36px',
                        display: openSidebar ? "none" : ""
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography
                      component="h1"
                      variant="h6"
                      color="inherit"
                      noWrap
                      sx={{ flexGrow: 1 }}
                    >
                      Dashboard
                    </Typography>
                    <IconButton color="inherit">
                      <Badge badgeContent={4} color="info">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                  </Toolbar>
                </Box>
            </AppBar>
          <Drawer className="admin__sidebar"
            variant="permanent"
            open={openSidebar}
            onClose={toggleDrawer}
            sx={{
              width: openSidebar ? drawerWidth : "60px",
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: openSidebar ? drawerWidth : "60px",
                boxSizing: 'border-box',
                transition: "all linear 240ms"
              },
              zIndex: 1,
          
            }}
          >
              <Box className="admin__sidebar__inner">
              <Toolbar
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                  }}
                >
                  <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                  </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                  <ListItemButton>
                    <NavLink
                       to="admin/dashboard"
                       style={({ isActive }) =>
                         isActive ? activeStyle : undefined
                       }
                      >
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dashboard" />
                    </NavLink>
                  </ListItemButton>
                  <ListItemButton>
                  <NavLink
                       to="admin/user"
                       style={({ isActive }) =>
                         isActive ? activeStyle : undefined
                       }
                      >
                    <ListItemIcon>
                      <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                  </NavLink>
                  </ListItemButton>
                  <Divider sx={{ my: 1 }} />
                  <ListItemButton
                    onClick={handleLogout}
                  >
                    <ListItemIcon>
                    <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="logout" />
                  </ListItemButton>
                </List>
              </Box>
          </Drawer>

          <Box className="admin__content"
            sx={{
              flex: 1,
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {childen ? childen : <Outlet />}
            </Container>
          </Box>
        </Box>
    </Box>
  );
};
