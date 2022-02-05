import React from "react";

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

const ProgressBarData = () => {
  return {
    skills,
  };
};

export default ProgressBarData;
