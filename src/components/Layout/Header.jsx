import React, { useEffect } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  AppBar,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
const Header = ({ openSidebar, drawerWidth, toggleDrawer }) => {

  const dispatch = useDispatch();

  useEffect( () => {
    
  }, [])
  
  return (
    <AppBar
      className="admin__header"
      sx={{
        position: "absolute",
        width: `${openSidebar ? `calc(100% - ${drawerWidth}px)` : "100%"}`,
        transition: "all linear 240ms",
      }}
    >
      <Box className="admin__header__inner">
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              display: openSidebar ? "none" : "",
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
  );
};

export default Header;
