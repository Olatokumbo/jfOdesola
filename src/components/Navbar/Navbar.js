import React, {useState} from "react";
import { Typography } from "@material-ui/core";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [buttonState, setButtonState] = useState(false);
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
      <div className={buttonState?style.change :style.hamburger} onClick={()=>setButtonState((prevState)=>!prevState)}>
        <span className={style.rectangle1}></span>
        <span className={style.rectangle2}></span>
        <span className={style.rectangle3}></span>
      </div>
    </div>
  );
};

export default Navbar;
