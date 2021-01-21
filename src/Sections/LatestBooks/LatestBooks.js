import React from "react";
import { Typography, Button } from "@material-ui/core";
import BookImage from "../../assets/book1.jpg";
import style from "./LatestBooks.module.css";

const LatestBooks = () => {
  return (
    <div className={style.latestBooks}>
      <Typography className={style.headerTitle}>Latest Books</Typography>
      <div className={style.bookList}>
          <img src={BookImage} alt='book1' className={style.bookImage}/>
          <img src={BookImage} alt='book1' className={style.bookImage}/>
          <img src={BookImage} alt='book1' className={style.bookImage}/>
          <img src={BookImage} alt='book1' className={style.bookImage}/>
          <img src={BookImage} alt='book1' className={style.bookImage}/>
          <img src={BookImage} alt='book1' className={style.bookImage}/>
      </div>
        <Button  className={style.btn} variant="contained" color="primary" size="large" onClick={()=>window.open("http://bit.ly/jfobooks", "_blank")}>See More</Button>
    </div>
  );
};

export default LatestBooks;
