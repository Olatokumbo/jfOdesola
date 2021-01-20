import React from "react";
import { Typography } from "@material-ui/core";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Typography className={style.logo}>Johnson Odesola</Typography>
      <ul className={style.menu}>
        <li>
          <Typography>Home</Typography>
        </li>
        <li>
          <Typography>About</Typography>
        </li>
        <li>
          <Typography>Media</Typography>
        </li>
        <li>
          <Typography>Contact</Typography>
        </li>
      </ul>
      <div className={style.hamburger}>
        <span className={style.rectangle}></span>
        <span className={style.rectangle}></span>
        <span className={style.rectangle}></span>
      </div>
    </div>
  );
};

export default Navbar;
