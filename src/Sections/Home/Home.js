import { Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.home}>
      <Navbar />
      <div className={style.main}>
        <div className={style.left}>
          <Typography className={style.name}>
          Lorem ipsum dolor sit amet
          </Typography>
        </div>
        <div className={style.right}>
          {/* <Typography>The Right Side</Typography> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
