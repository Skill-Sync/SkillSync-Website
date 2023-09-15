import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./MentorProfile.style.scss";
import Khadra from "../../../assets/MohamedKhadra.jpg";
import Egypt from "../../../assets/k.png";
import { ReactComponent as Line } from "../../../assets/Line.svg";
import SetDate from "../SetDate/SetDate";
const MentorProfile = () => {
  return (
    <Box className="mentor-profile-container">
      <Container className="">
        <Box className="edit-profile-container">
          <Typography
            component="h2"
            variant="h2"
            className="edit-profile-title"
          >
            Personal Information
          </Typography>
          <Box className="big-container">
            <Box className="user-info-container">
              <Box>
                <Grid className="input-container" item>
                  <label className="prifile-label-input">Full Name</label>
                  <input
                    className="text-field profile-input"
                    required
                    fullWidth
                    name="name"
                    placeholder="Name"
                    type="name"
                    id="name"
                    autoComplete="name"
                  />
                </Grid>
                <Grid className="input-container" item>
                  <label className="prifile-label-input">Email</label>
                  <input
                    className="text-field profile-input"
                    required
                    fullWidth
                    name="email"
                    placeholder="Brandonelouis@gmail.com"
                    type="email"
                    id="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid className="input-container phone-container" item>
                  <Box>
                    <label className="prifile-label-input ">Phone</label>
                    <img src={Egypt} alt="egypt" />
                  </Box>

                  <input
                    className="text-field profile-input phone-input"
                    required
                    fullWidth
                    name="phone"
                    placeholder="Phone"
                    type="phone"
                    id="phone"
                    autoComplete="phone"
                  />
                </Grid>
              </Box>
              <Line style={{ marginTop: "30px" }} />
              <Box>
                <Avatar className="mentor-img" src={Khadra} alt="Khadra" />
                <Grid className="input-container" item>
                  <label className="prifile-label-input">About</label>
                  <input
                    className="text-field profile-input desc-input"
                    required
                    fullWidth
                    placeholder="Lorem ipsum dolor sit amet, consec...."
                    type="desc"
                    id="desc"
                    autoComplete="desc"
                  />
                </Grid>
              </Box>
            </Box>
            <Button className="update-btn">Update Change</Button>
          </Box>
        </Box>
        <SetDate />
      </Container>
    </Box>
  );
};

export default MentorProfile;
