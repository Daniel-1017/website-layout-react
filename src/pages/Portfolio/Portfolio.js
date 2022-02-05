import React from "react";
import Project1 from "../../assets/images/project-1.jpg";
import Project2 from "../../assets/images/project-2.jpg";
import Project3 from "../../assets/images/project-3.jpg";
import Project4 from "../../assets/images/project-4.jpg";
import Project5 from "../../assets/images/project-5.jpg";
import Project6 from "../../assets/images/project-6.jpg";
import Project7 from "../../assets/images/project-7.jpg";
import Project8 from "../../assets/images/project-8.jpg";
import Project9 from "../../assets/images/project-9.jpg";
import classes from "./Portfolio.module.css";

const projects = [
  {
    id: 1,
    projectName: "architect website",
    projectTechnologies: "HTML / CSS / JS",
    image: Project1,
    videoLink: "https://www.youtube.com/watch?v=3J-EFMzz94g",
  },
  {
    id: 2,
    projectName: "Budget App",
    projectTechnologies: "ReactJS",
    image: Project2,
    videoLink: "https://www.youtube.com/watch?v=fDffQYs2WB0",
  },
  {
    id: 3,
    projectName: "wine house",
    projectTechnologies: "HTML / CSS / JS",
    image: Project3,
    videoLink: "https://www.youtube.com/watch?v=jtmuopTpzGE",
  },
  {
    id: 4,
    projectName: "Task Manager",
    projectTechnologies: "ReactJS",
    image: Project4,
    videoLink: "https://www.youtube.com/watch?v=fqup-BL3VjI",
  },
  {
    id: 5,
    projectName: "The Road",
    projectTechnologies: "HTML / CSS / JS",
    image: Project5,
    videoLink: "https://www.youtube.com/watch?v=qmyN7lYY_xo",
  },
  {
    id: 6,
    projectName: "food recepie app",
    projectTechnologies: "ReactJS",
    image: Project6,
    videoLink: "https://www.youtube.com/watch?v=d1vT4kkTCaw",
  },
  {
    id: 7,
    projectName: "slideshow",
    projectTechnologies: "HTML / CSS / JS",
    image: Project7,
    videoLink: "https://www.youtube.com/watch?v=1qhSSp2q7n4",
  },
  {
    id: 8,
    projectName: "hamburger menu",
    projectTechnologies: "HTML / CSS / JS",
    image: Project8,
    videoLink: "https://www.youtube.com/watch?v=9Q7wy8r3i8w",
  },
  {
    id: 9,
    projectName: "CSS grid menu",
    projectTechnologies: "HTML / CSS / JS",
    image: Project9,
    videoLink: "https://www.youtube.com/watch?v=HScySfeSmWc",
  },
];

const Portfolio = () => {
  return (
    <section className={classes["section-3"]}>
      <h2 className="section-heading">My Projects</h2>
      <div className={`${classes["projects-wrapper"]} center`}>
        {projects.map((project) => (
          <div key={project.id} className={classes.project}>
            <div className={classes["project-text"]}>
              <h2 className={classes["project-name"]}>{project.projectName}</h2>
              <h4 className={classes["project-technologies"]}>
                {project.projectTechnologies}
              </h4>
            </div>
            <img src={project.image} className={classes["project-img"]} />

            <a
              href={project.videoLink}
              className={classes["project-link"]}
              target="_blank"
            >
              Go to video
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
