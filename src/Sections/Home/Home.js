import { Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slideshow from "../../components/Slideshow/Slideshow";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.home} id="home">
      <Navbar />
      <div className={style.main}>
        <div className={style.left}>
          <Typography className={style.name}>
          Pastor Johnson Funso Odesola
          </Typography>
        </div>
        <div className={style.right}>
          <Slideshow/>
        </div>
      </div>
    </div>
  );
};

export default Home;
