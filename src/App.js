import React from "react";
import SideBar from "./components/sidebar/SideBar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Project from "./components/Projects/Project";
const App = () => {
  return (
    <>
      <SideBar />
      <About />
      <TechStack />
      <Project />
    </>
  );
};

export default App;
