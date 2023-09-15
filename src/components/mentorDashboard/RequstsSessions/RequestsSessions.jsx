import React from "react";
import { sessionsArray } from "../Dashboard/Dashboard";
import { Avatar, Box, Button, Typography } from "@mui/material";
import "./RequestsSessions.style.scss";
const RequestsSessions = () => {
  return (
    <Box className="requests-sessions-container">
      <Typography
        className="requests-sessions-title"
        component="h4"
        variant="h4"
      >
        Requests
      </Typography>
      <Box className="response-sessions-container">
        {sessionsArray.map((session) => (
          <Box className="response-session-container">
            <Box className="name-img-container">
              <Avatar
                className="img-avatar"
                src={session.image}
                alt={session.name}
              />
              <Typography className="name" component="h4" Avatar="h4">
                {session.name}
              </Typography>
            </Box>

            <Box className="date-container">
              <Typography className="date" component="p" variant="p">
                {session.date}
              </Typography>
              <Typography className="date" component="p" variant="p">
                From {session.Start} to {session.End}
              </Typography>
            </Box>

            <Box className="btns-container">
              <Button className="Approve-btn btn">Approve</Button>
              <Button className="Reject-btn btn">Reject</Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RequestsSessions;
