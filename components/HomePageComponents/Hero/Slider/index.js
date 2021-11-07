import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const bannerImages1 = "/assets/images/mosq.jpg";
const bannerImages2 = "/assets/images/mosq2.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <div className="slider">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        ssr={true}
      >
        <img className="slider-images" src={bannerImages1} alt="banner images" />
        <img className="slider-images" src={bannerImages2} alt="banner images" />
      </Carousel>
    </div>
  );
};

export default Slider;
