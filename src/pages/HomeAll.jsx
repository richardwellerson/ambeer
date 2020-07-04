import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/index.css";
import Home from "./Home";
import Home2 from "./Home2";

const responsive = {
  superLargeDesktop: {
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

const HomeAll = () => {
  return (
    <Carousel dotListClass="custom-dot-list-style" responsive={responsive}>
      <Home />
      <Home2 />
    </Carousel>
  );
};

export default HomeAll;
