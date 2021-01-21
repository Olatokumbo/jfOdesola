import React from "react";
import Carousel from "react-material-ui-carousel";
import slideImages1 from "../../assets/slideshow_1.jpg";
import slideImages4 from "../../assets/slideshow_4.jpg";
import slideImages5 from "../../assets/slideshow_5.jpg";
import style from "./slideshow.module.css";
var items = [slideImages1, slideImages4, slideImages5];

const Slideshow = () => {
  return (
    <Carousel
      autoPlay={true}
      className={style.carouselItem}
      navButtonsAlwaysVisible={true}
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
