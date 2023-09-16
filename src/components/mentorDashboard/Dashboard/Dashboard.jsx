import React, { useState } from "react";
import "./Dashboard.style.scss";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import Slaman from "../../../assets/MohammedSalman.jpg";
import Abo from "../../../assets/MohammedAboEl-Seoud.jpg";
import Mohanad from "../../../assets/MohannadElSayeh.png";

const initialSessionsArray = [
  {
    id: 1,
    image: Slaman,
    name: " Salman",
    date: "12/8/2023",
    Start: "8:00 pm",
    End: "10:00 pm",
  },
  {
    id: 2,
    image: Abo,
    name: " Abo-Elsoud",
    date: "22/8/2023",
    Start: "9:00 Am",
    End: "11:00 Am",
  },
  {
    id: 3,
    image: Mohanad,
    name: "Mohannad ElSayeh",
    date: "12/8/2023",
    Start: "8:00 pm",
    End: "10:00 pm",
  },
  {
    id: 4,
    image: Slaman,
    name: "Mohammed Salman",
    date: "12/8/2023",
    Start: "8:00 pm",
    End: "10:00 pm",
  },
];

const Dashboard = () => {
  const [approvedSessions, setApprovedSessions] = useState([]);
  const [rejectedSessions, setRejectedSessions] = useState([]);
  const [sessionsArray, setSessionsArray] = useState(initialSessionsArray);
  const [showRequests, setShowRequests] = useState(false);

  const handleApproveSession = (id) => {
    const sessionToApprove = sessionsArray.find((session) => session.id === id);
    if (sessionToApprove) {
      setApprovedSessions((prevSessions) => [
        ...prevSessions,
        sessionToApprove,
      ]);
    }
    setSessionsArray((prevSessions) =>
      prevSessions.filter((session) => session.id !== id)
    );
  };

  const handleRejectSession = (id) => {
    const sessionToReject = sessionsArray.find((session) => session.id === id);
    if (sessionToReject) {
      setRejectedSessions((prevSessions) => [...prevSessions, sessionToReject]);
    }
    setSessionsArray((prevSessions) =>
      prevSessions.filter((session) => session.id !== id)
    );
  };

  return (
    <Box className="dashboard-container">
      <Container className="dashboard-items">
        <Box className="scheduled-sessions-container">
          <Typography
            component="h2"
            variant="h2"
            className="scheduled-sessions-title"
          >
            Scheduled sessions
          </Typography>
          <Box className="sessions-container">
            {showRequests &&
              approvedSessions.map((session) => (
                <Box className="session-container" key={session.id}>
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
              <Box
                className={`response-session-container ${
                  approvedSessions.find((s) => s.id === session.id)
                    ? "approved"
                    : ""
                } ${
                  rejectedSessions.find((s) => s.id === session.id)
                    ? "rejected"
                    : ""
                }`}
                key={session.id}
              >
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
                  {!approvedSessions.find((s) => s.id === session.id) &&
                    !rejectedSessions.find((s) => s.id === session.id) && (
                      <>
                        <Button
                          className="Approve-btn btn"
                          onClick={() => {
                            handleApproveSession(session.id);
                            setShowRequests(true);
                          }}
                        >
                          Approve
                        </Button>
                        <Button
                          className="Reject-btn btn"
                          onClick={() => handleRejectSession(session.id)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
