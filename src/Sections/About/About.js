import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import Biography from "../../Sections/Biography/Biography";
import Profile from "../../assets/main.jpg";
import Rectangle from "../../assets/rectangle.png";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import style from "./About.module.css";

const About = ({aboutHeader1, aboutHeader2, aboutInfo}) => {
  const [readMoreState, setReadMoreState] = useState(true);
  return (
    <div className={style.aboutMain}>
      <div className={style.about} id="about">
        <Bounce left>
          <div className={style.aboutLeft}>
            <img src={Profile} alt="profile" />
            <img src={Rectangle} alt="rectangle" />
          </div>
        </Bounce>
        <Bounce right>
          <div className={style.aboutRight}>
            <Typography className={style.header}>About JFO</Typography>
            <div className={style.content}>
              <Typography component="p">
               {aboutHeader1}
              </Typography>
              <Typography>
                {aboutHeader2}
              </Typography>
            </div>
            <div className={style.buttonContainer}>
              <Button
                onClick={() => setReadMoreState((prevState) => !prevState)}
                variant="contained"
                color="primary"
                className={style.btn}
                size="large"
              >
                {readMoreState ? "Read More" : "Show Less"}
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
        </Bounce>
      </div>
      <Biography show={!readMoreState} content={aboutInfo} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    aboutHeader1: state.info.info.aboutHeader1,
    aboutHeader2: state.info.info.aboutHeader2,
    aboutInfo:state.info.info.aboutInfo
  };
};

export default connect (mapStateToProps)(About);
