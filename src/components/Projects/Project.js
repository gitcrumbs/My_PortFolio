import React from "react";
import ProjectList from "./ProjectLIst";
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
  ];

  return (
    <div>
      <div className="container">
        <div className="section-title">
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
