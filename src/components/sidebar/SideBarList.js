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

import { Link } from "react-scroll";


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
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={150}
                offset={-100}
              >
                <FcHome size={25} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true} duration={150}>
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item" onClick={!ExpandSideBar}>
              <Link to="workExperience" spy={true} smooth={true} duration={150}>
                <FcFactory size={25} /> Work Eperience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="techstack" spy={true} smooth={true} duration={150}>
                <MdBiotech size={25} color="orange" /> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" spy={true} smooth={true} duration={150}>
                <MdCastForEducation size={25} /> Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="project" spy={true} smooth={true} duration={150}>
                <FcTodoList size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="testimonials" spy={true} smooth={true} duration={150}>
                <FcSalesPerformance size={25} /> Testimonials
              </Link>
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
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={150}
                offset={-100}
              >
                <FcHome size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true} duration={150}>
                <FcNightPortrait size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="workExperience" spy={true} smooth={true} duration={150}>
                <FcFactory size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="techstack" spy={true} smooth={true} duration={150}>
                <MdBiotech size={25} color="orange" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" spy={true} smooth={true} duration={150}>
                <MdCastForEducation size={25} color="white" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="project" spy={true} smooth={true} duration={150}>
                <FcTodoList size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="testimonials" spy={true} smooth={true} duration={150}>
                <FcSalesPerformance size={25} />
              </Link>
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
