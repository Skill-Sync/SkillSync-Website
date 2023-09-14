import React from "react";
import {
  Drawer,
  Divider,
  ListItem,
  Typography,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  List,
  IconButton,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DrawerLogo } from "../../../assets/Drawer.svg";

const PremanentDrawer = ({
  drawerWidth,
  toggleCloseDrawer,
  showDrawer,
  drawerType,
}) => {
  const navigate = useNavigate();

  /*=============
    my list title
  =============*/
  const myList = [
    { title: "Home", navLocation: "/", icon: HomeIcon },

    { title: "Profile", icon: PersonIcon, navLocation: "/profile" },

    { title: "Logout", icon: LogoutIcon, navLocation: "/logout" },
  ];
  return (
    <Drawer
      showDrawer={showDrawer}
      sx={{
        display: { xs: showDrawer, sm: "block" },
        width: `${drawerWidth}px`,
        flexShrink: 0,
        backgroundColor: "#181A20",
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
          backgroundColor: "#181A20",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={toggleCloseDrawer}
    >
      <List>
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: "10px",
            mt: "7px",
          }}
        >
          <IconButton>
            <DrawerLogo />
          </IconButton>
        </ListItem>

        <Divider />

        {myList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.navLocation)}>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontWeight="bold">{item.title}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default PremanentDrawer;
