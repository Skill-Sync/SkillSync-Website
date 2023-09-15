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
  selectedItem,
  onItemClick,
}) => {
  const navigate = useNavigate();

  /*=============
    my list title
  =============*/
  const myList = [
    { title: "Home", navLocation: "/mentorhome", icon: HomeIcon },
    {
      title: "Profile",
      icon: PersonIcon,
      navLocation: "/mentorhome/mentorprofile",
    },
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
          <ListItem
            key={index}
            disablePadding
            sx={{
              backgroundColor:
                selectedItem === item.title ? "#282B34" : "inherit", // Change text color to blue when selected
              my: "10px",
              width: "200px",
              borderRadius: "10px",
              margin: "20px auto",
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate(item.navLocation);
                onItemClick(item.title);
              }}
              sx={{
                color: selectedItem === item.title ? "blue" : "inherit", // Change text color to blue when selected
              }}
            >
              <ListItemIcon>
                <item.icon
                  sx={{
                    marginLeft: "18px",
                    fontSize: "25px",
                    color: selectedItem === item.title ? "blue" : "red", // Change icon color to blue when selected
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    fontWeight="bold"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: "600",
                      marginRight: "100px",
                      color:
                        item.title === "Logout"
                          ? "#FF0000"
                          : selectedItem === item.title
                          ? "blue"
                          : "inherit", // Change text color to blue when selected
                    }}
                  >
                    {item.title}
                  </Typography>
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
