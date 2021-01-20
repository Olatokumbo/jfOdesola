import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import style from "./Socialbar.module.css";
import { Typography } from "@material-ui/core";

const Socialbar = () => {
  return (
    <div className={style.socialbar}>
      <div className={style.instagram}>
        <InstagramIcon className={style.icon} />
        <Typography className={style.title}>Instagram</Typography>
      </div>
      <div className={style.facebook}>
        <FacebookIcon className={style.icon} />
        <Typography className={style.title}>Facebook</Typography>
      </div>
      <div className={style.twitter}>
        <TwitterIcon className={style.icon} />
        <Typography className={style.title}>Twitter</Typography>
      </div>
    </div>
  );
};

export default Socialbar;
