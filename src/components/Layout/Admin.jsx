import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import Header from "./Header";
import MainContent from "./MainContent";
import "./admin.scss";
const drawerWidth = 240;

export const AdminLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleDrawer = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Box className="admin" component="main">
      <Box className="admin__wrapper" sx={{ display: "flex" }}>
        <Header
          openSidebar={openSidebar}
          toggleDrawer={toggleDrawer}
          drawerWidth={drawerWidth}
        />

        <SideBar
          openSidebar={openSidebar}
          toggleDrawer={toggleDrawer}
          drawerWidth={drawerWidth}
        />

        <MainContent component={children ? children : <Outlet />} />
      </Box>
    </Box>
  );
};
