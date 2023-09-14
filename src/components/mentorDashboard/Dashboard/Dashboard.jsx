import React from "react";
import "./Dashboard.style.scss";
import { Avatar, Box, Container, Typography } from "@mui/material";
import Slaman from "../../../assets/MohammedSalman.jpg";
import Abo from "../../../assets/MohammedAboEl-Seoud.jpg";
import Mohanad from "../../../assets/MohannadElSayeh.png";

const sessionsArray = [
  {
    image: Slaman,
    name: " Salman",
    date: "12/8/2023",
    Start: "8:00 pm",
    End: "10:00 pm",
  },
  {
    image: Abo,
    name: " Abo-Elsoud",
    date: "22/8/2023",
    Start: "9:00 Am",
    End: "11:00 Am",
  },
  {
    image: Mohanad,
    name: "Mohannad ElSayeh",
    date: "12/8/2023",
    Start: "8:00 pm",
    End: "10:00 pm",
  },
  {
    image: Slaman,
    name: "Mohammed Salman",
    date: "12/8/2023",
    Start: "8:00 pm",
    End: "10:00 pm",
  },
];

const Dashboard = () => {
  return (
    <Box className="dashboard-container">
      <Container className="dashboard-items">
        <Box className="scheduled-sessions-container">
          <Typography
            component="h2"
            variant="h2"
            className="scheduled-sessions-title"
          >
            Sceduled sessions
          </Typography>
          <Box className="sessions-container">
            {sessionsArray.map((session) => (
              <Box className="session-container">
                <Avatar
                  className="session-avatar"
                  src={session.image}
                  alt={session.name}
                />
                <Typography
                  className="session-name"
                  component="h6"
                  variant="h6"
                >
                  {session.name}
                  <Typography
                    className="session-date"
                    component="p"
                    variant="p"
                  >
                    {session.Start} to {session.End}
                  </Typography>{" "}
                  <Typography
                    className="session-date"
                    component="p"
                    variant="p"
                  >
                    {session.date}
                  </Typography>{" "}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
