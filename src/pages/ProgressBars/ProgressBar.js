import React from "react";
import ProgressBarsdata from "../../data/ProgressBarData";
import classes from "./ProgressBars.module.css";

const ProgressBar = () => {
  const { skills } = ProgressBarsdata();

  return (
    <div className={classes["progress-bars-wrapper"]}>
      {skills.map((progressBar) => (
        <div key={progressBar.id} className={classes["progress-bar"]}>
          <p className={classes["progress-text"]}>
            {progressBar.skillName}
            <span>{progressBar.knowledge}</span>%
          </p>
          <div
            className={classes["progress-percent"]}
            style={{ width: `${progressBar.knowledge}%` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
