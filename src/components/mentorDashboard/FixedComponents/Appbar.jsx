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
import khadra from "../../../assets/MohamedKhadra.jpg";
import { useStateContext } from "../../../context/AuthContext";

const Appbar = ({ drawerWidth, toggleOpenDrawer, selectedItem }) => {
  const { user } = useStateContext();
  console.log(user);
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
          sx={{ color: "black", display: { sm: "none" } }}
          onClick={toggleOpenDrawer}
        >
          <Menu style={{ color: "black" }} />
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
          {selectedItem === "Profile" ? "Profile" : "Home"}
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
          <Avatar alt="" src={khadra} />
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
              Mohamed Khdara
            </Typography>
            <Typography
              variant="span"
              color="white"
              sx={{
                mr: 1,
                fontSize: "13px",
                color: "rgba(41, 45, 50, 0.44)",
              }}
            >
              React
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
