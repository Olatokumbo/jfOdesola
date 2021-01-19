import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import InstagramEmbed from "react-instagram-embed";
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
          options={{ height: "100vh", width: 320 }}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CKLjCOgF_Wx/"
          clientAccessToken="REACT_APP_APP_ID|REACT_APP_SECRET_KEY"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
