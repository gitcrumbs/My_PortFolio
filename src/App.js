import React from "react";
import SideBar from "./components/sidebar/SideBar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Project from "./components/Projects/Project";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Education from "./components/Education/Education";
const App = () => {
  return (
    <>
      <SideBar />
      <About />
      <TechStack />
      <Project />
      <WorkExperience />
      <Education />
    </>
  );
};

export default App;
