import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import style from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={style.socialMedia}>
      <Typography className={style.title}>Socials</Typography>
      <div>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
      </div>
      <div className={style.container}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="pastorjfodesola"
          options={{ height: "100vh", width: 400}}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
