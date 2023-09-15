import React from "react";
import "./OurTeam.style.scss";
import { Typography } from "@mui/material";
import MohamedKhadra from "../../assets/MohamedKhadra.jpg";
import MohamedAboelsauld from "../../assets/MohammedAboEl-Seoud.jpg";
import Salman from "../../assets/MohammedSalman.jpg";
import Mohnnad from "../../assets/MohannadElSayeh.png";
import Elmohamdy from "../../assets/ElMohamadyIbrahim.jpg";
import Medhat from "../../assets/MohammedMedhat.png";
import { ReactComponent as TiwiterIcon } from "../../assets/twitter.svg";
import { ReactComponent as Instgram } from "../../assets/instgram.svg";
import { ReactComponent as Printe } from "../../assets/pinter.svg";
import { ReactComponent as SocialLinks } from "../../assets/SocialLinks.svg";

const ourTeamArray = [
  {
    Image: Salman,
    Name: "Mohamed Salman",
    role: "Mobile Developer",
  },
  {
    Image: MohamedAboelsauld,
    Name: "Mohamed Abo El-Seoud",
    role: "Back End ",
  },
  {
    Image: Mohnnad,
    Name: "Mohannad Elsayeh",
    role: "Mobile Developer ",
  },
  {
    Image: Medhat,
    Name: "Mohamed Medhat",
    role: "Back End",
  },
  {
    Image: Elmohamdy,
    Name: "ElMohamady Ibrahim",
    role: "UI/UX Designer",
  },
  {
    Image: MohamedKhadra,
    Name: "Mohamed Khadra",
    role: "Front End ",
  },
];

const OurTeam = () => {
  return (
    <div className="our-team-section">
      <div className="our-team-container">
        <div className="our-team-section-desc">
          <Typography
            component="h2"
            variant="h2"
            className="our-team-section-title"
          >
            Meet our team
          </Typography>
          <Typography component="p" variant="p" className="our-team-section-p">
            Get to know the faces behind the scenes and learn about the values
            that drive us.
          </Typography>
        </div>
        <div className="our-team-section-items">
          {ourTeamArray.map((item, index) => (
            <div className="our-team-section-item" key={index}>
              <div className="our-team-section-item-icon">
                <img src={item.Image} alt={item.Name} />
              </div>
              <Typography
                component="h3"
                variant="h3"
                className="our-team-section-item-title"
              >
                {item.Name}
              </Typography>
              <Typography
                component="p"
                variant="p"
                className="our-team-section-item-desc"
              >
                {item.role}
              </Typography>
              <div className="social-container">
                <TiwiterIcon />
                <Printe />
                <Instgram />
              </div>
            </div>
          ))}
        </div>
        <div className="footer">
          <Typography component="p" variant="p" className="footer-p">
            Made with love by SkillSync team ❤️
          </Typography>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
