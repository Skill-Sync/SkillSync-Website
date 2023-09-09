import React from "react";
import "./MonetorRequest.style.scss";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ReactComponent as Group } from "../../../assets/Group.svg";
import FormInput from "../../formInput/FormInput";
import Egypt from "../../../assets/k.png";

const MonetorRequest = () => {
  return (
    <Box className="monetor-page-container" bgcolor={"#131313"}>
      <IconButton className="logo-container">
        <Group />
      </IconButton>
      <Typography className="monetor-page-title" component="h2" variant="h2">
        Please Enter Your Details
      </Typography>

      <Container className="monetor-container">
        <Box className="inputs-container">
          <Grid className="input-container" item>
            <FormInput
              className="text-monetor-field"
              required
              fullWidth
              name="name"
              label="Full name"
              type="name"
              id="name"
              autoComplete="name"
            />
          </Grid>
          <Grid className="input-container" item>
            <FormInput
              className="text-monetor-field"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid
            className="input-container phone-input-container"
            item
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img src={Egypt} alt="egypt" />
            <FormInput
              className="text-monetor-field  phone-filed"
              required
              fullWidth
              id="email"
              name="email"
              label="Phone"
              autoComplete="email"
            />
          </Grid>
          <Grid className="input-container select-skill-container" item>
            <label className="select-skill-label">
              Choose The Skill You Have
            </label>

            <select>
              <option disabled selected hidden>
                Skill required to have a mentorship in (one skill)
              </option>

              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </Grid>
        </Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="380"
          viewBox="0 0 2 560"
          fill="none"
        >
          <path d="M1 1L1.00002 559" stroke="white" stroke-linecap="round" />
        </svg>
        <Box className="submit-container">
          <label className="monetor-message-label" for="message">
            Request Letter:
          </label>

          <input
            className="monetor-message"
            type="text"
            id="message"
            name="message"
          />
          <Button variant="contained" className="next-btn">
            SUBMIT
          </Button>
          <span>. All fileds are required</span>
        </Box>
      </Container>
    </Box>
  );
};

export default MonetorRequest;
