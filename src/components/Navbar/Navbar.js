import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import NavLinks from "../../data/NavLinks";

const Navbar = () => {
  const { navLinks } = NavLinks();
  return (
    <Fragment>
      <nav className={`${classes.navbar} center`}>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.id}
            to={navLink.to}
            activeClassName={classes.change}
            className={classes["navbar-link"]}
          >
            {navLink.linkText}
          </NavLink>
        ))}
      </nav>
    </Fragment>
  );
};

export default Navbar;
