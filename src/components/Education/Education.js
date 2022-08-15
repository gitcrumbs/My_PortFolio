import React from "react";
import "./Education.css";
import "react-vertical-timeline-component/style.min.css";
import { GiFlyingFlag } from "react-icons/gi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  const EducationData = [
    // {
    //   institution: "Liverpool John Moores University, England ",
    //   degree: "M.sc in Computer Science",
    //   Year: "2023",
    // },
    // {
    //   institution:
    //     "International Institute of Information Technology, Bangalore.",
    //   degree: "Executive PG-Diploma in Full Stack Development",
    //   Year: "2022",
    // },
    {
      institution: "GITAM UNIVERSTIY, Visakhapatnam",
      degree: "Bachelor of Technology (Electronics and Instrumentation)",
      Year: "2009 - 2013",
    },
  ];

  return (
    <div id="education" className="container">
      <div className="section-title">
        <div className="timeline-icon">
          <FaUserGraduate />
        </div>
        <h5>Education</h5>
        <span className="underline"></span>
      </div>
      <VerticalTimeline lineColor="#F05511">
        {EducationData.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.Year}
            dateClassName="date-class"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<GiFlyingFlag />}
          >
            <div className="salutation">
              <h3 className="vertical-timeline-element-title">{item.degree}</h3>
              <h4 className="vertical-timeline-element-title">
                {item.institution}
              </h4>
              <span className="vertical-timeline-element-subtitle">
                {"Year : "}
                {item.Year}
              </span>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
