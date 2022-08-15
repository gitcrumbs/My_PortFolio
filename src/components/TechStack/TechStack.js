import React, { useState } from "react";
import "./TechStack.css";
import { FaGraduationCap } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { ImOffice } from "react-icons/im";
import Fade from "react-reveal/Fade";
const TechStack = () => {
  const data = [
    {
      name: "Full Stack Developer",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "grad",
          link: "",
        },
      ],
    },
    {
      name: "HTML CSS & JavaScript",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "grad",
          link: "",
        },
        {
          mode: "eLearning",
          link: "https://coursera.org/share/a39b6ab8fdb2d68e8d71f4fb0edea93a",
        },
        {
          mode: "onJob",
          link: "",
        },
      ],
    },
    {
      name: "React JS",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "grad",
          link: "",
        },
      ],
    },
    {
      name: "JAVA",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "grad",
          link: "",
        },
        {
          mode: "onJob",
          link: "",
        },
      ],
    },
    {
      name: "Selenium (JAVA)",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "onJob",
          link: "",
        },
      ],
    },
    {
      name: "UX Designing",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "grad",
          link: "",
        },
        {
          mode: "eLearning",
          link: "https://drive.google.com/uc?id=16CN3rORMKX2cHYCaPSh43T1badqOsfee",
        },
      ],
    },

    {
      name: "AWS Cloud",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "grad",
          link: "",
        },
        {
          mode: "eLearning",
          link: "",
        },
      ],
    },
    {
      name: "Google Cloud",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "eLearning",
          link: "https://www.cloudskillsboost.google/public_profiles/16bcda2a-7013-4ae9-839c-6c5c8b53008d",
        },
      ],
    },
    {
      name: "Python",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "eLearning",
          link: "",
        },
      ],
    },
    {
      name: "Devops",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "eLearning",
          link: "https://coursera.org/share/17b6e51f16dcf1c2d1af40b0f30ad690",
        },
        {
          mode: "onJob",
          link: "",
        },
      ],
    },
    {
      name: "BlockChain",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "eLearning",
          link: "https://coursera.org/share/25bdc6ba2d6bdcbb4166f9eb5c9d3c38",
        },
      ],
    },
    {
      name: "Microservices with Spring Boot and Spring Cloud",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "eLearning",
          link: "https://coursera.org/share/abddc123763057011e414ac5d28214b0",
        },
        {
          mode: "grad",
          link: "",
        },
      ],
    },

    {
      name: "VBScripting",
      SelfRating: "3.5/5",
      learningMode: [
        {
          mode: "onJob",
          link: "",
        },
      ],
    },
  ];

  const colors = [
    "#F1C40F",
    "#5DADE2",
    "#58D68D",
    "#2980B9",
    "#5D6D7E",
    "#EC152F",
    "#DAF7A6",
    "#CACFD2",
    "#D35400",
    "#69FFDB",
    "#FF697B",
    "#BE73DC",
    "#D6AD60",
    "#F4EBD0",
    "#D773A2",
    "#07BB9C",
  ];

  const [loadMoreTechStack, setloadMoreTechStack] = useState(3);

  const loadMore = () => {
    setloadMoreTechStack((prev) => prev + 3);
  };

  return (
    <div id="techstack" className="container techstack-section">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="underline"></span>
      </div>

      <div className="row">
        {data.slice(0, loadMoreTechStack).map((item, index) => (
          <Fade right>
            <div
              id="show-no-show"
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

                <h5>{item.name}</h5>

                <div className="learning-mode">
                  {item.learningMode.map((type, index) =>
                    type.mode === "grad" ? (
                      <a href={type.link} target="_blank">
                        <FaGraduationCap />
                      </a>
                    ) : type.mode === "eLearning" ? (
                      <a href={type.link} target="_blank">
                        <GrCertificate />
                      </a>
                    ) : (
                      <ImOffice />
                    )
                  )}
                </div>
                <h6 className="self-rating">SelfRating : {item.SelfRating}</h6>
              </div>
            </div>
          </Fade>
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
