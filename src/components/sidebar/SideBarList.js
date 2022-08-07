import React from "react";
import "./SideBarList.css";
import profilepic from "../images/profilepic.jpg";
import { MdBiotech } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";

const SideBarList = ({ ExpandSideBar }) => {
  return (
    <React.Fragment>
      {ExpandSideBar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} />
          </div>
          <ul>
            <li className="nav-item">
              <FcHome size={25} /> Home
            </li>
            <li className="nav-item">
              <FcNightPortrait size={25} /> About
            </li>
            <li className="nav-item">
              <FcFactory size={25} /> Work Eperience
            </li>
            <li className="nav-item">
              <MdBiotech size={25} color="orange" /> Tech Stack
            </li>
            <li className="nav-item">
              <MdCastForEducation size={25} /> Education
            </li>
            <li className="nav-item">
              <FcTodoList size={25} /> Projects
            </li>
            <li className="nav-item">
              <FcSalesPerformance size={25} /> Testimonials
            </li>
            <li className="nav-item">
              <FcContacts size={25} /> Contact
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              <FcNightPortrait size={25} />
            </li>
            <li className="nav-item">
              <FcFactory size={25} />
            </li>
            <li className="nav-item">
              <MdBiotech size={25} color="orange" />
            </li>
            <li className="nav-item">
              <MdCastForEducation size={25} color="white" />
            </li>
            <li className="nav-item">
              <FcTodoList size={25} />
            </li>
            <li className="nav-item">
              <FcSalesPerformance size={25} />
            </li>
            <li className="nav-item">
              <FcContacts size={25} />
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SideBarList;
