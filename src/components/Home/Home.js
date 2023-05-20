import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Resume from "../docs/Resume_2.pdf";
import Fade from "react-reveal/Fade";
const Home = () => {
  return (
    <div id="home" className="container-fluid home">
      <div className="container home-content">
        <Fade right>
          <h1>Hi I am a ..</h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Staff Engineer (QA)",
                  "SDET",
                  "Active Researcher",
                  "Automation Architect",
                  "Certified Full Stack Engineer",
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
        </Fade>
      </div>

      <Fade bottom>
        <div className="button-for-action">
          <div className="hire-me-button">Hire Me</div>
          <div className="getresume-button">
            <a href={Resume} download="AshwaniSingh_CV.pdf">
              Get Resume
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
