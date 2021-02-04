import { Typography } from "@material-ui/core";
import React from "react";
import quoteMarks from "../../assets/quotation-marks.png";
import { connect } from "react-redux";
import style from "./WisdomQuotes.module.css";

const WisdomQuotes = ({ wisdomQuote }) => {
  return (
    <div className={style.wisdomQuotes}>
      <Typography className={style.headerTitle}>Wisdom Quote</Typography>
      <div className={style.content}>
        <img src={quoteMarks} alt="quotes" />
        <Typography className={style.message}>{wisdomQuote}</Typography>
        <img src={quoteMarks} alt="quotes" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wisdomQuote: state.info.info.wisdomQuote,
  };
};

export default connect(mapStateToProps)(WisdomQuotes);
