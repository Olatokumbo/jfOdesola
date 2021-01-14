import React from "react";
import clsx from "clsx";
import { Typography, Button } from "@material-ui/core";
import Profile from "../../assets/profile.png"
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.aboutLeft}>
          <img src={Profile} alt="profile"/>
      </div>
      <div className={style.aboutRight}>
        <Typography className={style.header}>About JFO</Typography>
        <div className={style.content}>
          <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </Typography>
          <Typography>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </Typography>
        </div>
        <div className={style.buttonContainer}>
          <Button variant="contained" color="primary" className={style.btn} size="large">
            Lorem ipsum
          </Button>
          <Button variant="outlined"  color="primary" className={clsx(style.btn, style.outlinedBtn)} size="large">
            Lorem ipsum
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
