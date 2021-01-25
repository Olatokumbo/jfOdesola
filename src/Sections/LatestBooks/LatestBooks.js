import React from "react";
import { Typography, Button } from "@material-ui/core";
import BookImage1 from "../../assets/book1.jpg";
import BookImage2 from "../../assets/book2.jpg";
import BookImage3 from "../../assets/book3.jpg";
import BookImage4 from "../../assets/book4.jpg";
import BookImage5 from "../../assets/book5.jpg";
import BookImage6 from "../../assets/book6.jpg";
import Fade from 'react-reveal/Fade';
import style from "./LatestBooks.module.css";

const LatestBooks = () => {
  return (
    <div className={style.latestBooks} id="books">
      <Typography className={style.headerTitle}>Latest Books</Typography>
     <Fade top cascade>
     <div className={style.bookList}>
        <img src={BookImage1} alt="book1" className={style.bookImage} />
        <img src={BookImage2} alt="book1" className={style.bookImage} />
        <img src={BookImage3} alt="book1" className={style.bookImage} />
        <img src={BookImage4} alt="book1" className={style.bookImage} />
        <img src={BookImage5} alt="book1" className={style.bookImage} />
        <img src={BookImage6} alt="book1" className={style.bookImage} />
      </div>
     </Fade>
      <Button
        className={style.btn}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => window.open("http://bit.ly/jfobooks", "_blank")}
      >
        See More
      </Button>
    </div>
  );
};

export default LatestBooks;
