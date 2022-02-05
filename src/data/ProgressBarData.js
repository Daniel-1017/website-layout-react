import React from "react";
import classes from "../pages/ProgressBars/ProgressBars.module.css";
import { FaLightbulb } from "react-icons/fa";
import { FaCut } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

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

const ProgressBarData = () => {
  return {
    skills,
    icons,
  };
};

export default ProgressBarData;
