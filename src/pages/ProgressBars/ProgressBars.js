import React from "react";
import PrgressBar from "./ProgressBar";
import classes from "./ProgressBars.module.css";
import { FaLightbulb } from "react-icons/fa";
import { FaCut } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
{
  /* <FaLightbulb />, <FaCut />, <FaTachometerAlt />, <FaRocket /> */
}

const icons = [
  {
    iconName: <FaLightbulb className={classes.icon} />,
    heading: "Creative",
  },
  {
    iconName: <FaCut className={classes.icon} />,
    heading: "Problem Solving",
  },
  {
    iconName: <FaTachometerAlt className={classes.icon} />,
    heading: "Fast",
  },
  {
    iconName: <FaRocket className={classes.icon} />,
    heading: "Dynamic",
  },
];

const ProgressBars = () => {
  return (
    <section className={classes["section-2"]}>
      <h1 className="section-heading">About Me</h1>
      <div className={classes["progress-bars-wrapper"]}>
        <PrgressBar />
      </div>
      <div className={classes.services}>
        {icons.map((icon) => (
          <div className={classes.service}>
            {icon.iconName}
            <h2 className={classes["service-heading"]}>{icon.heading}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgressBars;
