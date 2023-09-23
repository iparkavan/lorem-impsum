import React from "react";
// import Hero from "../public/images/Hero.png";
import classes from "./Carousel.module.scss";

const Carousel = () => {
  return (
    <div className={classes.carousel}>
      <div className={classes["carousel-hero-image"]}>
        <div className={classes.heading}>
          <div className={classes.heading_main}>
            <img
              className={classes.logo}
              src="images/Logo_big.png"
              alt="#mainLogo"
            />
            <h1>LOGO</h1>
            <div className={classes.heading_sub}>
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua.
              </p>
              <div className={classes.scroll}>
                <span>Scroll</span>
                <div className={classes.divider} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
