import React from "react";
import { Button, IconButton } from "@mui/material";
import { ReactComponent as Group } from "../../../assets/Group.svg";
import "./Navbar.style.scss";
import { Link } from "react-router-dom";

const navbarLinks = ["Home", "Features", "Meet our team"];
const Navbar = () => {
  return (
    <nav className="appbar">
      <div className="navbar-container">
        <IconButton className="logo-container">
          <Group />
        </IconButton>
        <ul className="navbar-links">
          {navbarLinks.map((link, index) => {
            return (
              <li key={index}>
                <a href="/">{link}</a>
              </li>
            );
          })}
        </ul>
        <div className="btns-container">
          <Button className="join-mentor-btn">
            <Link className="link" to="monetor-request">
              Join as a mentor
            </Link>
          </Button>
          <Button className="login-btn">
            <Link className="link-login" to="signin">
              Login
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
