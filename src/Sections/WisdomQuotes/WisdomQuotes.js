import { Typography } from "@material-ui/core";
import React from "react";
import quoteMarks from "../../assets/quotation-marks.png";
import style from "./WisdomQuotes.module.css";

const WisdomQuotes = () => {
  return (
    <div className={style.wisdomQuotes}>
      <Typography className={style.headerTitle}>Wisdom Quote</Typography>
      <div className={style.content}>
        <img src={quoteMarks} alt="quotes" />
        <Typography className={style.message}>
          A life without Jesus is a life that is totally wasted. You must know that it is only Jesus that
          adds value to life
        </Typography>
        <img src={quoteMarks} alt="quotes" />
      </div>
    </div>
  );
};

export default WisdomQuotes;
