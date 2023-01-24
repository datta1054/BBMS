import React from "react";
import { NavLink } from "react-router-dom";
import bdrop from "../../assets/img/bdrop.png";
import SearchPage from "./SearchPage";

import classes from "../../assets/css/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <div className={classes.blood}>
          <a href="/home">
            <img className={classes.logoIm} src={bdrop} alt="bdroplogo" />
            Blood Bank Management System
          </a>
        </div>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/donate" activeclassname={classes.active}>
              Donate /Request
            </NavLink>
          </li>
          <li>
            <NavLink to="/login/emp" activeclassname={classes.active}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
