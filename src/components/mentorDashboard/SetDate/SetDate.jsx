import React from "react";
import "./SetDate.style.scss";
import { Box, Grid, Typography } from "@mui/material";
const SetDate = () => {
  return (
    <Box className="set-date-container">
      <Typography className="set-date-title" component="h2" variant="h2">
        Your available time
      </Typography>
      <Box className="date-container">
        <Grid className="input-container" item>
          <label className="profile-label-input" for="appt-time">
            From{" "}
          </label>
          <input
            className="profile-date-input"
            id="appt-time"
            type="time"
            name="appt-time"
            value="13:30"
          />
        </Grid>
        <Grid className="input-container" item>
          <label className="profile-label-input" for="appt-time">
            To
          </label>
          <input
            className="profile-date-input"
            id="appt-time"
            type="time"
            name="appt-time"
            value="13:30"
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default SetDate;
