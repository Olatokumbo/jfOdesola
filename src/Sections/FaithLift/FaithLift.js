import React from "react";
import { Typography, Card, CardContent, Link } from "@material-ui/core";
import ReactPlayer from "react-player";
import style from "./FaithLift.module.css";

const FaithLift = () => {
  return (
    <div className={style.faithLift}>
      <div className={style.left}>
        <Typography className={style.title}>Faith Lift Poductions</Typography>
        <Typography component="p" className={style.content}>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </Typography>
        <Typography compnent="p" className={style.content}>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </Typography>
        <div className={style.cardContainer}>
          <Card className={style.card1}>
            <CardContent className={style.cardContent}>
              <Typography className={style.cardTitle}>
                Lorem ipsum dolor sit amet,
              </Typography>
              <Typography className={style.cardText}>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna
              </Typography>
            </CardContent>
          </Card>
          <Card className={style.card2}>
            <CardContent className={style.cardContent}>
              <Typography className={style.cardTitle}>
                Lorem ipsum dolor sit amet,
              </Typography>
              <Typography className={style.cardText}>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.video}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=fVgDfeacXQ8"
            controls={true}
          />
          <div className={style.videoContent}>
            <Typography>Please check out our YouTube Channel&nbsp;</Typography>
            <Typography>
              <Link target="_blank" href="https://www.youtube.com/playlist?list=PLc6HQFsla64aokhHbgB5Xu6_nK5SXPQKI">Here</Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaithLift;
