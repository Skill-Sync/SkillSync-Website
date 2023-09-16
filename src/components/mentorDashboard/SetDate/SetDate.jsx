import React, { useState } from "react";
import "./SetDate.style.scss";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useHoursContext } from "../../../context/SetDateContext";

const SetDate = () => {
  // const { handleSave } = useHoursContext();

  // const [startTime, setStartTime] = useState("");
  // const [endTime, setEndTime] = useState("");

  // const handleStartTimeChange = (e) => {
  //   setStartTime(e.target.value);
  // };

  // const handleEndTimeChange = (e) => {
  //   setEndTime(e.target.value);
  // };

  // const handleSaveHours = () => {
  //   const workingHours = `${startTime}-${endTime}`;

  //   handleSave(workingHours);
  // };
  return (
    <Box className="set-date-container">
      <Typography className="set-date-title" component="h2" variant="h2">
        Your available time
      </Typography>
      <Box className="date-container">
        <Grid className="input-container" item>
          <label className="profile-label-input" htmlFor="start-time">
            From{" "}
          </label>
          <input
            className="profile-date-input"
            type="time"
            id="appt-time"
            name="appt"
            min="09:00"
            max="18:00"
            value="10:00"
            required
          />
        </Grid>
        <Grid className="input-container" item>
          <label className="profile-label-input" htmlFor="end-time">
            To
          </label>
          <input
            className="profile-date-input"
            type="time"
            id="appt"
            name="appt"
            min="09:00"
            max="18:00"
            value="12:00"
            required
          />
        </Grid>
      </Box>
      <Button className="update-btn">Update </Button>
    </Box>
  );
};

export default SetDate;
