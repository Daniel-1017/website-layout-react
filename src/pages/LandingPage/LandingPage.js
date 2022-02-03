import React from "react";
import { Link } from "react-router-dom";
import johnSmith from "../../assets/images/john-smith.jpg";
import bg from "../../assets/images/bg.jpg";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <section
      className={`${classes["section-1"]} center`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className={classes["section-1-heading"]}>Web Developer</h1>
      <img src={johnSmith} alt="John Smith" className={classes["person-img"]} />
      <h3 className={classes["person-name"]}>John Smith</h3>
      <Link to="/portfolio" className={classes["section-1-btn"]}>
        Projects
      </Link>
    </section>
  );
};

export default LandingPage;
