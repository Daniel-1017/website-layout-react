import React from "react";
import classes from "./ProgressBars.module.css";

const skills = [
  {
    id: 1,
    skillName: "HTML",
    knowledge: 97,
  },
  {
    id: 2,
    skillName: "CSS",
    knowledge: 89,
  },
  {
    id: 3,
    skillName: "JavaScript",
    knowledge: 85,
  },
  {
    id: 4,
    skillName: "SASS",
    knowledge: 87,
  },
  {
    id: 5,
    skillName: "ReactJs",
    knowledge: 85,
  },
  {
    id: 6,
    skillName: "NodeJs",
    knowledge: 70,
  },
  {
    id: 7,
    skillName: "MongoDB",
    knowledge: 50,
  },
];

const ProgressBar = () => {
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
