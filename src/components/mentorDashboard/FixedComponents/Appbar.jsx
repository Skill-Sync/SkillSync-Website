import React from "react";
import {
  Typography,
  Avatar,
  Link,
  Toolbar,
  AppBar,
  IconButton,
  Box,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Khadra from "../../../assets/MohamedKhadra.jpg";

const Appbar = ({ drawerWidth, toggleOpenDrawer }) => {
  return (
    <AppBar
      position="static"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
        backgroundColor: "#EBDFD7",
        padding: "15px 45px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08);",
      }}
    >
      <Toolbar>
        <IconButton
          sx={{ color: "white", display: { sm: "none" } }}
          onClick={toggleOpenDrawer}
        >
          <Menu />
        </IconButton>
        <Link
          color="inherit"
          href="/"
          underline="none"
          variant="h5"
          sx={{
            flexGrow: 1,
            fontSize: "25px",
            fontWeight: "600",
            color: "#000606",
            fontFamily: "Montserrat",
            letterSpacing: "0.16px",
          }}
        >
          Home
        </Link>
        <Box
          sx={{
            width: "200px",
            height: "50px",
            backgroundColor: "white",
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "7px",
          }}
        >
          <Avatar alt="Khadra" src={Khadra} />
          <Box>
            <Typography
              variant="h6"
              color="white"
              sx={{
                mr: 1,
                fontSize: "14px",
                color: "#000606",
                fontFamily: "Montserrat",
              }}
            >
              Mohamed Khadra
            </Typography>
            <Typography
              variant="span"
              color="white"
              sx={{ mr: 1, fontSize: "13px", color: "rgba(41, 45, 50, 0.44)" }}
            >
              Front End
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
