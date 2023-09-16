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
import Egypt from "../../../assets/k.png";
import { ReactComponent as Line } from "../../../assets/Line.svg";
import SetDate from "../SetDate/SetDate";
import Khadra from "../../../assets/MohamedKhadra.jpg";
import { ReactComponent as UpdateAvatar } from "../../../assets/addphoto.svg";

const MentorProfile = () => {
  // const { user } = useStateContext();

  // const [updatedName, setUpdatedName] = useState(user.data.name);
  // const [updatedEmail, setUpdatedEmail] = useState(user.data.email);
  // const [updatedAbout, setUpdatedAbout] = useState(user.data.about);
  // const [updatedPhoto, setUpdatedPhoto] = useState(user.data.photo);

  // const handleNameChange = (e) => {
  //   setUpdatedName(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setUpdatedEmail(e.target.value);
  // };
  // const handleAboutChange = (e) => {
  //   setUpdatedAbout(e.target.value);
  // };
  // const handleUpadteInfo = () => {
  //   handleUpdateProfile();
  //   console.log(user);
  // };
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
                    name="name"
                    placeholder="Mohamed Khadra"
                    type="name"
                    id="name"
                    autoComplete="name"
                    // value="Mohamed Khadra"
                  />
                </Grid>
                <Grid className="input-container" item>
                  <label className="prifile-label-input">Email</label>
                  <input
                    className="text-field profile-input"
                    name="email"
                    placeholder="mokhadra008@gmail.com"
                    type="email"
                    id="email"
                    autoComplete="email"
                    // value="mokhadra008@gmail.com"
                  />
                </Grid>
                <Grid className="input-container phone-container" item>
                  <Box>
                    <label className="prifile-label-input ">Phone</label>
                    <img src={Egypt} alt="egypt" />
                  </Box>

                  <input
                    className="text-field profile-input phone-input"
                    name="phone"
                    placeholder="Phone"
                    type="phone"
                    id="phone"
                    autoComplete="phone"
                    // value="01143181418"
                  />
                </Grid>
              </Box>
              <Line style={{ marginTop: "30px" }} />
              <Box>
                <Avatar
                  className="mentor-img"
                  src={Khadra}
                  alt="Mohamed Khadra"
                  sx={{ position: "relative" }}
                />
                <UpdateAvatar
                  style={{
                    position: "absolute",
                    right: "320px",
                    top: "330px",
                    cursor: "pointer",
                  }}
                />
                <Grid className="input-container" item>
                  <label className="prifile-label-input">About</label>
                  <input
                    className="text-field profile-input desc-input"
                    placeholder="I'm Mohamed Khadra, FrontEnd developer with React JS  "
                    type="desc"
                    id="desc"
                    autoComplete="desc"
                    value="I'm Mohamed Khadra, FrontEnd developer with React JS "
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
