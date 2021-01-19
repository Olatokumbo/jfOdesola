import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import style from "./Socialbar.module.css";

const Socialbar = () => {
  return (
    <div className={style.socialbar}>
      <div className={style.instagram}>
        <InstagramIcon className={style.icon} />
      </div>
      <div className={style.facebook}>
        <FacebookIcon className={style.icon} />
      </div>
      <div className={style.twitter}>
        <TwitterIcon className={style.icon} />
      </div>
    </div>
  );
};

export default Socialbar;
