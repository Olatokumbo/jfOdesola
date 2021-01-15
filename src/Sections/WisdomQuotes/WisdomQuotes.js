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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Typography>
        <img src={quoteMarks} alt="quotes" />
      </div>
    </div>
  );
};

export default WisdomQuotes;
