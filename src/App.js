import React from "react";
import SideBar from "./components/sidebar/SideBar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Project from "./components/Projects/Project";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Education from "./components/Education/Education";
import Testimonial from "./components/Testimonial/Testimonial";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobileView from "./components/sidebar/NavbarMobileView";
import Contact from "./components/Contact/Contact";
const App = () => {
  return (
    <>
      <NavbarMobileView />
      <SideBar />
      <About />
      <WorkExperience />
      <TechStack />
      <Education />
      <Project />
      <Testimonial />
      <Contact/>
      <ScrollToTop
        smooth="true"
        color="white"
        height="20px"
        width="20px"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />

    </>
  );
};

export default App;
