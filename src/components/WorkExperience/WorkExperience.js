import React from "react";
import "./WorkExperience.css";
import { GiFlyingFlag } from "react-icons/gi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode } from "react-icons/fa";
const WorkExperience = () => {
  const workExData = [
    {
      companyName: "InterContinental Exchange",
      year: "Oct-2020 to Current",
      positions: [
        { Role: "Senior Engineer (QA)", tenure: "Oct-2020 to Current" },
      ],
      techSkills: [
        {
          techName: "Full Stack",
        },
        {
          techName: "API Automation",
        },
        {
          techName: "Agile",
        },

        {
          techName: "QA Automation Developer (Java)",
        },
        {
          techName: "Rest-Assured",
        },
        {
          techName: "Framework Architecting",
        },

        {
          techName: "Selenium-Java",
        },

        {
          techName: "API Testing using PostMan",
        },

        {
          techName: "CI-CD Jenkins",
        },
      ],
    },
    {
      companyName: "Xoriant Solutions",
      year: "Aug-2017 to Oct-2020",
      positions: [
        { Role: "Senior Test Engineer G3", tenure: "Apr-2019 to Oct-2020" },
        { Role: "Test Engineer G2", tenure: "Aug-2017 to Apr-2019" },
      ],
      techSkills: [
        {
          techName: "Agile",
        },
        {
          techName: "Automation Framework Architecting",
        },
        {
          techName: "HP-UFT",
        },
        {
          techName: "QA Automation Developer (Java)",
        },
        {
          techName: "Http-Helper",
        },
        {
          techName: "Rest-Assured",
        },
        {
          techName: "QA Automation Developer UFT",
        },
        {
          techName: "CI-CD Jenkins",
        },
      ],
    },

    {
      companyName: "Cognizant",
      year: "Nov-2013 to August-2017",
      positions: [
        { Role: "Associate", tenure: "Jul-2016 to Aug-2017" },
        { Role: "Programmer Analyst", tenure: "Aug-2014 to Jul-2016" },
        { Role: "Programmer Analyst Trainee", tenure: "Nov-2013 to Aug-2014" },
      ],
      techSkills: [
        {
          techName: "Manual Testing",
        },
        {
          techName: "Onset of Automation Career",
        },
        {
          techName: "QA Automation Developer (Java)",
        },
        {
          techName: "Selenium",
        },
      ],
    },
    {
      companyName: "Graduated from GITAM University, Visakhapatnam",
      year: "2009-2013",
      positions: [
        { Role: "B.Tech", tenure: "Electronics and Instrumentation" },
      ],
      techSkills: [
        {
          techName:
            "Paper Presentation @ National Conference on Automation, Communication & Computing-2012",
        },
        {
          techName: "National Instruments LabView",
        },
        {
          techName: "Project on Process Automation and Fuzzification",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="section-title">
        <div className="timeline-icon">
          <FaLaptopCode />
        </div>

        <h5>Work Experience</h5>
        <span className="underline"></span>
      </div>
      <VerticalTimeline lineColor="#F05511">
        {workExData.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.year}
            dateClassName="date-class"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<GiFlyingFlag />}
          >
            {item.positions.map((pos, index) => (
              <div className="salutation">
                <h3 className="vertical-timeline-element-title">{pos.Role}</h3>
                <span className="vertical-timeline-element-subtitle">
                  {pos.tenure}
                </span>
              </div>
            ))}

            <fieldset className="FieldBorder">
              <legend>SkillSet :</legend>
              {item.techSkills.map((item, index) => (
                <div key={index} className="tech-used">
                  <p>{item.techName}</p>
                </div>
              ))}
            </fieldset>
            <div>
              <p>{item.companyName}</p>
              <span>{item.year}</span>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
