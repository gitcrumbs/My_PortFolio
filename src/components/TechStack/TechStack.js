import React, { useState } from "react";
import "./TechStack.css";

const TechStack = () => {
  const data = [
    {
      name: "Full Stack Developer",
    },
    {
      name: "UX Designing",
    },
    {
      name: "HTML",
    },

    {
      name: "Java",
    },
    {
      name: "Spring Cloud",
    },
    {
      name: "Kafka",
    },
    {
      name: "Selenium",
    },
    {
      name: "JavaScript",
    },
    {
      name: "React JS",
    },
    {
      name: "VBScripting",
    },
    {
      name: "Python",
    },
  ];

  const colors = [
    "#F1C40F",
    "#5DADE2",
    "#58D68D",
    "#2980B9",
    "#5D6D7E",
    "#4A235A",
    "#DAF7A6",
    "#CACFD2",
    "#D35400",
    "#69FFDB",
    "#FF697B",
  ];

  const [loadMoreTechStack, setloadMoreTechStack] = useState(3);

  const loadMore = () => {
    setloadMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="underline"></span>
      </div>

      <div className="row">
        {data.slice(0, loadMoreTechStack).map((item, index) => (
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 tech-cells"
            key={index}
          >
            <div className="tech-content">
              <span
                className="tech-content-number"
                style={{ backgroundColor: colors[index] }}
              >
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      {loadMoreTechStack >= data.length ? null : (
        <span className="load-more-tech-stack-button" onClick={loadMore}>
          Load More
        </span>
      )}
    </div>
  );
};

export default TechStack;
