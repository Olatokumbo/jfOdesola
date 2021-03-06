import React from "react";
import { Typography, Link } from "@material-ui/core";
// import Fade from "react-reveal/Fade";
import style from "./FaithLift.module.css";

const FaithLift = () => {
  return (
    <div className={style.faithLift} id="faithlift">
      <div className={style.left}>
        <Typography className={style.title}>Faith Lift Productions</Typography>
        <Typography component="p" className={style.content}>
          FAITHLIFT PRODUCTIONS & J.F. ODESOLA FILMS is a movie production
          outfit that produces high quality movies with decent christian
          teachings.
        </Typography>
        <Typography compnent="p" className={style.content}>
          Currently, Faith Lift Productions have produced over 20+ films ranging
          from different genres. Our primary goal with our Films is to share
          the Gospel of Jesus Christ with others.
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
            src="https://www.youtube.com/embed/videoseries?list=PLc6HQFsla64aokhHbgB5Xu6_nK5SXPQKI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={style.videoContent}>
            <Typography>Please check out our YouTube Channel&nbsp;</Typography>
            <Typography>
              <Link
                target="_blank"
                href="https://www.youtube.com/channel/UCbvSvzeLnUrT9XfYqSWeemQ"
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

export default FaithLift;
