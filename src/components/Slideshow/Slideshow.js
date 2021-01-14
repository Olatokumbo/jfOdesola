import React from "react";
import Carousel from "react-material-ui-carousel";
import slideImages from "../../assets/slideshow_1.jpg";
import style from "./slideshow.module.css";
var items = [slideImages, slideImages, slideImages];

const Slideshow = () => {
  return (
    <Carousel
      autoPlay={true}
      className={style.carouselItem}
      navButtonsAlwaysInvisible={true}
      nav
      indicators={false}

    //   animation="slide"

      timeout={500}
    >
      {items.map((data) => (
        <img className={style.photo} src={data} alt="headerImages" />
      ))}
    </Carousel>
  );
};

export default Slideshow;
