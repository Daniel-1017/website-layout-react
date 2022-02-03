import React from "react";
import classes from "./Footer.module.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`${classes["section-5"]} center`}>
      <div className={classes["social-media"]}>
        <a href="/" className={classes["social-media-link"]}>
          <FaGithubSquare className={classes.icon} />
        </a>
        <a href="/" className={classes["social-media-link"]}>
          <FaYoutube className={classes.icon} />
        </a>
        <a href="/" className={classes["social-media-link"]}>
          <FaFacebookSquare className={classes.icon} />
        </a>
        <a href="/" className={classes["social-media-link"]}>
          <FaInstagramSquare className={classes.icon} />
        </a>
      </div>
      <p className={classes.copyright}>
        Copyright &copy; CodeAndCreate. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
