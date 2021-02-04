import React from "react";
import Carousel from "react-material-ui-carousel";
// import slideImages1 from "../../assets/slideshow_1.jpg";
// import slideImages4 from "../../assets/slideshow_4.jpg";
// import slideImages5 from "../../assets/456.jpg";
import style from "./slideshow.module.css";
// var items = [slideImages1, slideImages4,];

const Slideshow = ({images}) => {
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
      {images.map((data, index) => (
        <img key={index} className={style.photo} src={data} alt="headerImages" />
      ))}
    </Carousel>
  );
};

export default Slideshow;
