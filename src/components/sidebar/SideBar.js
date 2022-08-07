import React, { useState } from "react";
import Home from "../Home/Home";
import "./SideBar.css";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import SideBarList from "./SideBarList";
const SideBar = () => {
  const [ExpandSideBar, setExpandSideBar] = useState(true);

  const handleexpandClick = () => {
    setExpandSideBar(!ExpandSideBar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={ExpandSideBar ? "sidebar-expand sidebar" : "sidebar"}>
        <div className="icon-for-sidebarexpand--and-collapse">
          <p onClick={handleexpandClick}>
            {ExpandSideBar ? (
              <BsChevronDoubleLeft size={30} />
            ) : (
              <BsChevronDoubleRight size={30} />
            )}
          </p>
        </div>
        <SideBarList ExpandSideBar={ExpandSideBar} />
      </div>
      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default SideBar;
