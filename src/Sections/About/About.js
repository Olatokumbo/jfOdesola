import React from "react";
import clsx from "clsx";
import { Typography, Button } from "@material-ui/core";
import Profile from "../../assets/main.jpg";
import Rectangle from "../../assets/rectangle.png";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.aboutLeft}>
        <img src={Profile} alt="profile" />
        <img src={Rectangle} alt="rectangle" />
      </div>
      <div className={style.aboutRight}>
        <Typography className={style.header}>About JFO</Typography>
        <div className={style.content}>
          <Typography component="p">
            Johnson Funso Odesola is a distinguished specialist in Divinity
            after many academic forays through over nine local and international
            tertiary institutions where he obtained six PhD's, two masters
            degrees, a postgraduate diploma, three Bachelor's degrees, a Higher
            National Diploma, an Ordinary national diploma, and Diplomas in
            various academic and theological Disciplines.
          </Typography>
          <Typography>
            Following over forty meritorious years dedicated service in RCCG,
            odesola was appointed Assistant General Overseer on Admin &
            personnel and doubles as Pastor In charge (PIC), RCCG Region 1,
            Ebute Metta, Lagos.
          </Typography>
        </div>
        <div className={style.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={style.btn}
            size="large"
          >
            Learn more
          </Button>
          {/* <Button
            variant="outlined"
            color="primary"
            className={clsx(style.btn, style.outlinedBtn)}
            size="large"
          >
            Lorem ipsum
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
