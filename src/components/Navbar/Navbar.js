import React, { useState } from "react";
import { Typography, Menu } from "@material-ui/core";
import { Link } from "react-scroll";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [buttonState, setButtonState] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const changeBackground = () => {
    if (window.scrollY >= 20) setNavbar(true);
    else setNavbar(false);
  };
  const changeMenu = () => {
    //  console.log(window.innerWidth);
    if (window.innerWidth > 780) {
      setButtonState(false);
      handleClose();
    }
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  window.addEventListener("scroll", changeBackground);
  window.addEventListener("resize", changeMenu);
  return (
    <div className={navbar ? style.navbarActive : style.navbar}>
      <div className={style.header}>
        <Typography className={style.logo}>Johnson Odesola</Typography>
        <div
          className={buttonState ? style.change : style.hamburger}
          onClick={() => setButtonState((prevState) => !prevState)}
        >
          <span className={style.rectangle1}></span>
          <span className={style.rectangle2}></span>
          <span className={style.rectangle3}></span>
        </div>
      </div>
      <ul className={!buttonState ? style.menu : style.menuVertical}>
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
          <Typography onClick={handleClick}>Media</Typography>
        </li>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <li className={style.menuItem}>
            <Link
              activeClass="active"
              to="books"
              offset={-80}
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              <Typography>Books</Typography>
            </Link>
          </li>
          <li className={style.menuItem}>
            <Link
              activeClass="active"
              to="faithlift"
              offset={-80}
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              <Typography>FaithLift</Typography>
            </Link>
          </li>
          <li className={style.menuItem}>
            <Link
              activeClass="active"
              to="gallery"
              offset={-80}
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              <Typography>Gallery</Typography>
            </Link>
          </li>
        </Menu>
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
    </div>
  );
};

export default Navbar;
