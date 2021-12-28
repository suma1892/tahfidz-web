import React from "react";
import Header from "../../Global/Header";
// import Announcement from "./Announcement";
import Slider from "./Slider";
const Hero = ({ route }) => {
  if (!route) {
    route = '/'
  }

  return (
    <div className="hero">
      <Header route={route} />
      {/* <Announcement /> */}
      {/* <Slider /> */}
    </div>
  );
};

export default Hero;
