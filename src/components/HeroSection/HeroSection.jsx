import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./HeroSection.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as HeroSectionImage } from "../../assets/herosection.svg";
import { ReactComponent as ButtonIcon } from "../../assets/RocketLaunch.svg";

const HeroSection = () => {
  return (
    <Box className="hero-section">
      <div className="hero-section-container">
        <div className="left-hero-section">
          <Typography
            className="hero-section-title"
            component="h1"
            variant="h1"
          >
            Improve Your Skill And Find More
          </Typography>
          <Typography className="hero-section-p" component="p" variant="p">
            Build beautiful landing pages in record time with{" "}
            <span style={{ color: "#36F" }}> Anima </span>’s Landing Page UI kit
            for Figma. No code required!
          </Typography>
          <div className="hero-btns-container">
            <Button className="btn-join">
              <Link className="link-join">
                <ButtonIcon style={{ marginRight: "6px" }} /> Join as a mentor
              </Link>
            </Button>

            <Button className="btn-download">
              <Link className="link-download">Download App </Link>
            </Button>
          </div>
        </div>
        <div className="right-hero-section">
          <HeroSectionImage />
        </div>
      </div>
    </Box>
  );
};

export default HeroSection;
