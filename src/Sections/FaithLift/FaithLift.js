import React from "react";
import { Typography, Link } from "@material-ui/core";
// import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import style from "./FaithLift.module.css";

const FaithLift = ({faithLiftHeader1, faithLiftHeader2, channelLink, playListLink}) => {
  return (
    <div className={style.faithLift} id="faithlift">
      <div className={style.left}>
        <Typography className={style.title}>Faith Lift Productions</Typography>
        <Typography component="p" className={style.content}>
          {faithLiftHeader1}
        </Typography>
        <Typography compnent="p" className={style.content}>
          {faithLiftHeader2}
        </Typography>
        {/* <Fade top cascade>
          <div className={style.cardContainer}>
            <Card className={style.card1}>
              <CardContent className={style.cardContent}>
                <Typography className={style.cardTitle}>
                  Lorem ipsum dolor sit amet,
                </Typography>
                <Typography className={style.cardText}>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna
                </Typography>
              </CardContent>
            </Card>
            <Card className={style.card2}>
              <CardContent className={style.cardContent}>
                <Typography className={style.cardTitle}>
                  Lorem ipsum dolor sit amet,
                </Typography>
                <Typography className={style.cardText}>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Fade> */}
      </div>
      <div className={style.right}>
        <div className={style.video}>
          <iframe
            title="q3w4e56"
            width="560"
            height="315"
            src={playListLink}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={style.videoContent}>
            <Typography>Please check out our YouTube Channel&nbsp;</Typography>
            <Typography>
              <Link
                target="_blank"
                href={channelLink}
              >
                Here
              </Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    faithLiftHeader1: state.info.info.faithLiftHeader1,
    faithLiftHeader2: state.info.info.faithLiftHeader2,
    channelLink: state.info.info.channelLink,
    playListLink: state.info.info.playListLink
  };
};

export default connect(mapStateToProps)(FaithLift);
