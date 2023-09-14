import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "./FixedComponents/Appbar";
import PremanentDrawer from "./FixedComponents/PremanentDrawer";
import { Box, CssBaseline } from "@mui/material";

export const drawerWidth = 240;

const Root = () => {
  const [showDrawer, setShowDrawer] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");

  const toggleOpenDrawer = () => {
    setShowDrawer("block");
    setDrawerType("temporary");
  };
  const toggleCloseDrawer = () => {
    setShowDrawer("none");
    setDrawerType("permanent");
  };

  return (
    <Box>
      <CssBaseline />

      <div>
        <Appbar drawerWidth={drawerWidth} toggleOpenDrawer={toggleOpenDrawer} />
        <PremanentDrawer
          drawerWidth={drawerWidth}
          showDrawer={showDrawer}
          drawerType={drawerType}
          toggleCloseDrawer={toggleCloseDrawer}
        />
        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Outlet />
        </Box>
      </div>
    </Box>
  );
};

export default Root;
