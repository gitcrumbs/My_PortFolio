import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
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

const NavbarMobileView = () => {
  const [open, setOpen] = useState(false);

  const handleclick = () => {
    setOpen(!open);
  };
  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleclick} />
        </p>
      </div>
      {open ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
              <Link to="about" spy={true} smooth={true} duration={150}>
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link to="workExperience" spy={true} smooth={true} duration={150}>
                <FcFactory size={25} /> Work Eperience
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link to="techstack" spy={true} smooth={true} duration={150}>
                <MdBiotech size={25} color="orange" /> Tech Stack
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link to="education" spy={true} smooth={true} duration={150}>
                <MdCastForEducation size={25} /> Education
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link to="project" spy={true} smooth={true} duration={150}>
                <FcTodoList size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link to="testimonials" spy={true} smooth={true} duration={150}>
                <FcSalesPerformance size={25} /> Testimonials
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <FcContacts size={25} /> Contact
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
