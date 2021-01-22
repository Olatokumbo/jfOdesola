import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import style from "./Socialbar.module.css";
import { Typography } from "@material-ui/core";

const Socialbar = () => {
  return (
    <div className={style.socialbar}>
      <div className={style.instagram} onClick={()=>window.open("https://www.instagram.com/pastorjfodesola", "_blank")}>
        <InstagramIcon className={style.icon} />
        <Typography className={style.title}>Instagram</Typography>
      </div>
      <div className={style.facebook} onClick={()=>window.open("https://www.facebook.com/JFOdesola", "_blank")}>
        <FacebookIcon className={style.icon} />
        <Typography className={style.title}>Facebook</Typography>
      </div>
      <div className={style.twitter} onClick={()=>window.open("https://twitter.com/pastorjfodesola", "_blank")}>
        <TwitterIcon className={style.icon} />
        <Typography className={style.title}>Twitter</Typography>
      </div>
      <div className={style.youtube} onClick={()=>window.open("https://www.youtube.com/channel/UCbvSvzeLnUrT9XfYqSWeemQ", "_blank")}>
        <YouTubeIcon className={style.icon} />
        <Typography className={style.title}>Youtube</Typography>
      </div>
    </div>
  );
};

export default Socialbar;
