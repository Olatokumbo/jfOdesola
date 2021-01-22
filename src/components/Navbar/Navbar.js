import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-scroll";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [buttonState, setButtonState] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 20) setNavbar(true);
    else setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? style.navbarActive : style.navbar}>
      <Typography className={style.logo}>Johnson Odesola</Typography>
      <ul className={style.menu}>
        <li>
          <Link
            activeClass="active"
            to="home"
            offset={-80}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Typography>Home</Typography>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            offset={-80}
            spy={true}
            smooth={true}
            duration={500}
          >
            <Typography>About</Typography>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="media"
            offset={-80}
            spy={true}
            smooth={true}
            duration={500}
          >
            <Typography>Media</Typography>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            offset={-80}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Typography>Contact</Typography>
          </Link>
        </li>
      </ul>
      <div
        className={buttonState ? style.change : style.hamburger}
        onClick={() => setButtonState((prevState) => !prevState)}
      >
        <span className={style.rectangle1}></span>
        <span className={style.rectangle2}></span>
        <span className={style.rectangle3}></span>
      </div>
    </div>
  );
};

export default Navbar;
