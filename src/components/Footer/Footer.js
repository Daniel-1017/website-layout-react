import React from "react";
import classes from "./Footer.module.css";
import FooterLinks from "../../data/FooterLinks";

const Footer = () => {
  const { footerLinks } = FooterLinks();
  return (
    <footer className={`${classes["section-5"]} center`}>
      <div className={classes["social-media"]}>
        {footerLinks.map((footerLink) => (
          <a
            key={footerLink.id}
            href={footerLink.link}
            target="_blank"
            className={classes["social-media-link"]}
          >
            {footerLink.icon}
          </a>
        ))}
      </div>
      <p className={classes.copyright}>
        Copyright &copy; CodeAndCreate. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
