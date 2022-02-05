import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes["not-found"]}>
      <div>
        <h1 className={classes.error}>404</h1>
        <p className={classes["not-found-text"]}>Not Found!</p>
        <Link to="/home" className={classes["back-to-homepage"]}>
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
