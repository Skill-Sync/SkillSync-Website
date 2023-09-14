import React from "react";
import Navbar from "../../components/Routes/navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/features/Features";
import OurTeam from "../../components/ourTeam/OurTeam";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#181a20" }}>
      <Navbar />
      <HeroSection />
      <Features />
      <OurTeam />
    </div>
  );
};

export default Home;
