import React from "react";
import { Typography } from "@mui/material";
import "./Features.style.scss";
import { Link } from "react-router-dom";
import BottomArrow from "../../assets/arrow.svg"; // Import the arrow icon as an image
import ShareIcon from "../../assets/ShareIcon.svg";
import LearnIcon from "../../assets/LearnIcon.svg";
import BecomeIcon from "../../assets/BecomeIcon.svg";
import { ReactComponent as RightArrow } from "../../assets/ArrowRight.svg";

const FeatureSectionItems = [
  {
    icon: LearnIcon,
    name: "Learn New Skill",
    desc: "Tailor Anima's Landing Page UI Kit to your unique style and brand with customizable components, in no time!",
  },
  {
    icon: ShareIcon,
    name: "Share your skills",
    desc: "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
  },
  {
    icon: BecomeIcon,
    name: "Become a mentor",
    desc: "Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.",
  },
];

const Features = () => {
  return (
    <div className="feature-section">
      {/* <div className="arrow-container" style={{ cursor: "pointer" }}>
        <img
          src={BottomArrow}
          alt="Arrow"
          className="bottom-arrow"
          style={{ marginLeft: "825px", marginTop: "30px", cursor: "pointer" }}
        />
      </div> */}

      <div className="feature-section-container">
        <div className="feature-section-desc">
          <Typography
            component="h2"
            variant="h2"
            className="feature-section-title"
          >
            Features
          </Typography>
          <Typography component="p" variant="p" className="feature-section-p">
            Our vision is to build a strong learning community.
          </Typography>
        </div>
        <div className="feature-section-items">
          {FeatureSectionItems.map((item, index) => (
            <div className="feature-section-item" key={index}>
              <div className="feature-section-item-icon">
                <img
                  src={item.icon}
                  alt={item.name} // Add alt text for accessibility
                />
              </div>
              <Typography
                component="h3"
                variant="h3"
                className="feature-section-item-title"
              >
                {item.name}
              </Typography>
              <Typography
                component="p"
                variant="p"
                className="feature-section-item-desc"
              >
                {item.desc}
              </Typography>
              <Link className="learn-more-link">
                Learn More <RightArrow />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
