import React from "react";
import PrgressBar from "./ProgressBar";
import ProgressBarData from "../../data/ProgressBarData";
import classes from "./ProgressBars.module.css";

const ProgressBars = () => {
  const { icons } = ProgressBarData();
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
