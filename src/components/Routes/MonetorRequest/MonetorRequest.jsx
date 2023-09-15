import React, { useEffect, useState } from "react";
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
import { useMonitorContext } from "../../../context/MonitorRequestContext";
import { useNavigate } from "react-router-dom";
// import useMonitorContext from "../../../context/MonitorRequestContext.js"

const MonetorRequest = () => {
  const { monitorRequest } = useMonitorContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");

  const [skill, setSkill] = useState([]);
  const [requestLetter, setRequestLetter] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      monitorRequest(name, email, phone, selectedSkill, requestLetter);
      console.log("signup success");
      navigate("/signup");
    } catch (error) {
      console.log("signup failed:", error);
    }
  };

  useEffect(() => {
    fetch("https://skill-sync-backup.onrender.com/api/v1/skills/")
      .then((res) => res.json())
      .then((data) => {
        setSkill(data.data);
      });
  }, []);
  const handleSkillChange = (e) => {
    setSelectedSkills(e.target.value);
    setSelectedSkill(e.target.value);
  };

  const handleSelectClick = () => {
    setIsOpen(true);
  };

  const handleSelectBlur = () => {
    setIsOpen(false);
  };

  return (
    <Box className="monetor-page-container" bgcolor={"#131313"}>
      <IconButton className="logo-container">
        <Group />
      </IconButton>
      <Typography className="monetor-page-title" component="h2" variant="h2">
        Please Enter Your Details
      </Typography>

      <Container
        component="form"
        onSubmit={handleSubmit}
        className="monetor-container"
      >
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid
            className="input-container phone-input-container"
            item
            sx={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <img src={Egypt} alt="egypt" />
            </div>
            <FormInput
              className="text-monetor-field  phone-filed"
              required
              fullWidth
              id="Phone"
              name="Phone"
              label="Phone"
              autoComplete="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid className="input-container select-skill-container" item>
            <label className="select-skill-label">
              Choose The Skill You Have
            </label>

            <select
              id="skill"
              value={selectedSkills}
              onChange={handleSkillChange}
              onClick={handleSelectClick}
              onBlur={handleSelectBlur}
            >
              {!isOpen && (
                <option disabled value="" style={{ fontSize: "14px" }}>
                  Skill required to have a mentorship in (one skill)
                </option>
              )}
              {skill.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
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
            value={requestLetter}
            onChange={(e) => setRequestLetter(e.target.value)}
          />
          <Button variant="contained" className="next-btn" type="submit">
            SUBMIT
          </Button>
          <span>. All fileds are required</span>
        </Box>
      </Container>
    </Box>
  );
};

export default MonetorRequest;
