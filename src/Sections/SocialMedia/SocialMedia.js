import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import InstagramEmbed from "react-instagram-embed";
import Socialbar from "../../components/Socialbar/Socialbar";
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import style from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={style.socialMedia}>
      <Socialbar/>
      <Typography className={style.title}>Socials</Typography>
      <div>
        <IconButton onClick={()=>window.open("https://www.instagram.com/pastorjfodesola", "_blank")}>
          <InstagramIcon />
        </IconButton>
        <IconButton onClick={()=>window.open("https://www.facebook.com/JFOdesola", "_blank")}>
          <FacebookIcon />
        </IconButton>
        <IconButton onClick={()=>window.open("https://twitter.com/pastorjfodesola", "_blank")}>
          <TwitterIcon />
        </IconButton>
      </div>
      <div className={style.container}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CKLjCOgF_Wx/"
          clientAccessToken="1830281583805092|dc7dc8013da9f7a6b4f5479124e3c4cf"
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
        <FacebookProvider appId="1830281583805092">
        <EmbeddedPost href="https://www.facebook.com/photo?fbid=238622497632411&set=p.238622497632411 " width="100" />
      </FacebookProvider>
      <TwitterTimelineEmbed
          sourceType="profile"
          screenName="pastorjfodesola"
          options={{ height: "100vh", width: 320 }}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
