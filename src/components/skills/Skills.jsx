import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";
import "./Skills.syle.scss";
import { ReactComponent as Design } from "../../assets/design.svg";
import { ReactComponent as Web } from "../../assets/web.svg";
import { ReactComponent as Data } from "../../assets/dataAnalysis.svg";
import { ReactComponent as Mobile } from "../../assets/mobile.svg";

const skillsArray = [
  { id: 1, name: "UI Designer", icon: Design },
  { id: 2, name: "Web Developer", icon: Web },
  { id: 3, name: "Data Analyst", icon: Data },
  { id: 4, name: "Mobile Developer", icon: Mobile },
];

const Skills = () => {
  return (
    <>
      <Box className="skills-container row-1">
        {skillsArray.map((skill) => {
          const { id, name, icon } = skill;
          return (
            <Box
              key={id}
              className="skill-container"
              sx={getSkillContainerStyle(id)}
            >
              <SvgIcon component={icon} />
              <Typography component="p" variant="p" sx={getNameStyle(id)}>
                {name}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box className="skills-container row-2 ">
        {skillsArray.map((skill) => {
          const { id, name, icon } = skill;
          return (
            <Box
              key={id}
              className="skill-container"
              sx={getSkillContainerStyleRow2(id)}
            >
              <SvgIcon component={icon} />
              <Typography component="p" variant="p" sx={getNameStyle(id)}>
                {name}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box className="skills-container row-3 ">
        {skillsArray.map((skill) => {
          const { id, name, icon } = skill;
          return (
            <Box
              key={id}
              className="skill-container"
              sx={getSkillContainerStyle(id)}
            >
              <SvgIcon component={icon} />
              <Typography component="p" variant="p" sx={getNameStyle(id)}>
                {name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

const getSkillContainerStyle = (id) => {
  switch (id) {
    case 1:
      return { backgroundColor: "rgba(131, 56, 236, 0.10)", color: "#8338EC" };
    case 2:
      return { backgroundColor: "rgba(58, 134, 255, 0.10)", color: "#3A86FF" };
    case 3:
      return { backgroundColor: "rgba(255, 190, 11, 0.10)", color: "#FFBE0B" };
    case 4:
      return { backgroundColor: "rgba(251, 86, 7, 0.10)", color: "#FB5607" };
    default:
      return {};
  }
};

const getNameStyle = (id) => {
  switch (id) {
    case 1:
      return {
        color: "#8338EC",
      };
    case 2:
      return {
        color: "#3A86FF",
      };
    case 3:
      return {
        color: "#FFBE0B",
      };
    case 4:
      return { color: "#FB5607" };
    default:
      return {};
  }
};

const getSkillContainerStyleRow2 = (id) => {
  switch (id) {
    case 1:
      return { backgroundColor: "rgba(131, 56, 236, 0.10)", color: "#8338EC" };
    case 2:
      return { backgroundColor: "rgba(58, 134, 255, 0.10)", color: "#3A86FF" };
    case 3:
      return {
        backgroundColor: "rgba(255, 190, 11, 0.10)",
        color: "#FFBE0B",
        transform: "rotate(-5.619deg)",
      };
    case 4:
      return { backgroundColor: "rgba(251, 86, 7, 0.10)", color: "#FB5607" };
    default:
      return {};
  }
};

export default Skills;
