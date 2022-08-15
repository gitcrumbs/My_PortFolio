import React, { useState } from "react";
import "./ProjectList.css";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";
import Zoom from "react-reveal/Zoom";
const ProjectList = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleShowAndCollapse = (e) => {
    if (e.target.id !== "applink") {
      setShow(!show);

      if (!show) {
        e.target
          .closest(".project-list")
          .classList.add("project-list_activeState");
      } else {
        e.target
          .closest(".project-list")
          .classList.remove("project-list_activeState");
      }
    }
  };

  return (
    <Zoom>
      <div className="project-list" onClick={handleShowAndCollapse}>
        <div className="title-and-collpase-option">
          <h3>{data.name}</h3>
          <p>
            {show ? (
              <HiChevronDoubleUp size={20} />
            ) : (
              <HiChevronDoubleDown size={20} />
            )}
          </p>
        </div>

        {show ? (
          <div className="row">
            {data.techUsed.map((item, index) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="tech-used-in-project">
                  <p>{item.techName}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        {show ? <p>{data.description}</p> : <p></p>}
        {show ? (
          <a
            className="live-button-demo"
            id="applink"
            href={data.Projectlink}
            target="_blank"
          >
            App Link
          </a>
        ) : (
          <div></div>
        )}
      </div>
    </Zoom>
  );
};

export default ProjectList;
