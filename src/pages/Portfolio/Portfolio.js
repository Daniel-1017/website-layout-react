import React from "react";
import PortfolioData from "../../data/PortfolioData";
import classes from "./Portfolio.module.css";

const Portfolio = () => {
  const { projects } = PortfolioData();
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
