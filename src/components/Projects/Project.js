import React from "react";
import ProjectList from "./ProjectLIst";
import { SiMinutemailer } from "react-icons/si";
const Project = () => {
  const Projectsdata = [
    {
      name: "PortFolio App",
      description: "Showcase my Portfolio and the WorkDone",
      Projectlink: "http://gitcrumbs.github.io/My_PortFolio",
      techUsed: [
        {
          techName: "HTML",
        },
        {
          techName: "CSS",
        },
        {
          techName: "React Js",
        },
      ],
    },
    {
      name: "Expensifier App",
      description:
        "Make a note of all the expenses, Search by Matching text, Sort by filter like Data and Amount ",
      Projectlink: " https://expensifier-budget.herokuapp.com/",
      techUsed: [
        {
          techName: "HTML",
        },
        {
          techName: "CSS",
        },
        {
          techName: "React Js",
        },
      ],
    },
    {
      name: "Joke Telling RoBot",
      description:
        "This Prototype app tells a joke fetched from the v2.jokeapi.dev OApi Click on the 'Tell me a Joke Button' and enjoy !!",
      Projectlink: "https://gitcrumbs.github.io/simple-joke-teller/",
      techUsed: [
        {
          techName: "HTML",
        },
        {
          techName: "CSS",
        },
        {
          techName: "JavaScript",
        },
      ],
    },

    {
      name: "Infinite Image Scroller",
      description:
        "This Prototype demonstrates the Infinite Scrolling feature. When the scroller comes at the middle of the screen, the image api fetches the new list of images and it is rendered on the screen",
      Projectlink: "https://gitcrumbs.github.io/infiniteScroll_prototype/",
      techUsed: [
        {
          techName: "HTML",
        },
        {
          techName: "CSS",
        },
        {
          techName: "JavaScript",
        },
      ],
    },
    {
      name: "Toggle Dark and Light Mode",
      description:
        "This Prototype demonstrates the dark and light mode feature toggle",
      Projectlink: "https://gitcrumbs.github.io/toggle-light-dark-mode/",
      techUsed: [
        {
          techName: "HTML",
        },
        {
          techName: "CSS",
        },
        {
          techName: "JavaScript",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="section-title">
          <div className="timeline-icon">
            <SiMinutemailer />
          </div>
          <h5>Projects</h5>
          <span className="underline"></span>
        </div>

        <div className="row">
          {Projectsdata.map((data, index) => (
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
              <ProjectList data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
