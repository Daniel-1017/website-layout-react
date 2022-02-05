import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import classes from "../components/Footer/Footer.module.css";

const footerLinks = [
  {
    id: 1,
    icon: <FaGithubSquare className={classes.icon} />,
    link: "https://github.com/",
  },
  {
    id: 2,
    icon: <FaYoutube className={classes.icon} />,
    link: "https://www.youtube.com/",
  },
  {
    id: 3,
    icon: <FaFacebookSquare className={classes.icon} />,
    link: "https://www.facebook.com/",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className={classes.icon} />,
    link: "https://www.instagram.com/",
    class: 'classes["social-media-link"]',
  },
];

const FooterLinks = () => {
  return {
    footerLinks,
  };
};

export default FooterLinks;
