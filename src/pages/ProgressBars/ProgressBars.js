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
    id: 1,
    iconName: <FaLightbulb className={classes.icon} />,
    heading: "Creative",
  },
  {
    id: 2,
    iconName: <FaCut className={classes.icon} />,
    heading: "Problem Solving",
  },
  {
    id: 3,
    iconName: <FaTachometerAlt className={classes.icon} />,
    heading: "Fast",
  },
  {
    id: 4,
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
          <div key={icon.id} className={classes.service}>
            {icon.iconName}
            <h2 className={classes["service-heading"]}>{icon.heading}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgressBars;
