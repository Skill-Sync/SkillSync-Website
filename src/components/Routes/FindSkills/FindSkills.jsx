import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import "./FindSkills.style.scss";

import { ReactComponent as Group } from "../../../assets/Group.svg";

import SearchInterested from "../../SearchInterested/SearchInterested";
import SearchLearned from "../../SearchLearned/SearchLearned";
const FindSkills = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    { id: 1, name: "Item item item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <Box className="find-skills-page-container">
      <IconButton className="logo-container">
        <Group />
      </IconButton>
      <Typography className="find-skills-title" component="h2" variant="h2">
        Find Your Skills
      </Typography>

      <Container className="skills-container">
        <Box className="interested-skills-container">
          <Typography
            className="interested-skills-title"
            component="h4"
            variant="h4"
          >
            choose your interested skills
          </Typography>
          <Typography
            className="interested-skills-search-label"
            component="h6"
            variant="h6"
          >
            Search for a skill
          </Typography>
          <SearchInterested data={data} onItemClick={handleItemClick} />
        </Box>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="540"
          viewBox="0 0 12 555"
          fill="none"
        >
          <path
            d="M6 6L6.00002 549"
            stroke="white"
            stroke-width="11"
            stroke-linecap="round"
          />
        </svg>

        <Box className="have-skills-container">
          <Typography
            className="interested-skills-title"
            component="h4"
            variant="h4"
          >
            Choose the skill you have & Rating
          </Typography>
          <Typography
            className="interested-skills-search-label"
            component="h6"
            variant="h6"
          >
            Search for a skill
          </Typography>
          <SearchLearned
            data={data}
            onItemClick={handleItemClick}
            selectedItem={selectedItem}
          />
        </Box>
      </Container>
      <Button variant="contained" className="next-btn">
        NEXT
      </Button>
    </Box>
  );
};

export default FindSkills;
