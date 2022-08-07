import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Resume from "../docs/Resume_2.pdf";
const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="container home-content">
        <h1>Hi I am a ..</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                "Senior Engineer (QA)",
                "SDET",
                "Automation Architect",
                "Full Stack Software Developer",
                "UI/UX Designer",
                "React JS Developer",
                "Cloud Enthusiast",
              ],
              autoStart: true,
              loop: true,
              delay: 5,
            }}
          />
        </h3>
      </div>
      <div className="button-for-action">
        <div className="hire-me-button">Hire Me</div>
        <div className="getresume-button">
          <a href={Resume} download="AshwaniSingh_CV.pdf">
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
