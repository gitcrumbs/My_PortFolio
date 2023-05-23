import React from "react";
import "./About.css";
import profilepic from "../images/profilepic.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div id="about" className="container about-section ">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={profilepic} />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details"></div>
          <Flip>
            <div className="about-title">
              <h5>About Me</h5>
              <span className="underline"></span>
            </div>
          </Flip>
          <Fade right>
            <p>
            I aim to pursue a challenging career and be part of a progressive
            organization that gives me scope to enhance my knowledge, skills and
            help me reach the pinnacle in the field present, with sheer determination
            and dedication.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
