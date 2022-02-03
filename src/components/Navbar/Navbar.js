import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <nav className={`${classes.navbar} center`}>
        <NavLink
          to="/home"
          activeClassName={classes.change}
          className={classes["navbar-link"]}
        >
          Home
        </NavLink>
        <NavLink
          to="/about-me"
          activeClassName={classes.change}
          className={classes["navbar-link"]}
        >
          About
        </NavLink>
        <NavLink
          to="/portfolio"
          activeClassName={classes.change}
          className={classes["navbar-link"]}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact-me"
          activeClassName={classes.change}
          className={classes["navbar-link"]}
        >
          Contact
        </NavLink>
      </nav>
    </Fragment>
  );
};

export default Navbar;
