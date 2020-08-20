import React from "react";
import "./Home.styles.css";

function Home() {
  return (
    <div>
      <div className="left-sidebar general-font">
        <p className="sidebar-content">EXPERIENCE</p>
        <p className="sidebar-content">EDUCATION</p>
      </div>
      <div className="topping general-font">
        <li>
          <p className="topping-context">
            A MA International Relations graduate from University of Nottingham
          </p>
        </li>
        <li>
          <p className="topping-context">
            Quick learner, creative, customer-facing, provlem-solver focused, IT
            geek
          </p>
        </li>
      </div>
      <div className="column-top general-font">
        <div className="top-intro">
          <p>TRANSLATOR</p>
          <p>WEB DEVELOPER</p>
          <p>PRODUCT SPECIALIST</p>
        </div>
        <h1 className="top-context">XIANG JI</h1>
        <hr className="main-hr"></hr>
      </div>

      <div className="column-bottom">
        <div className="col-lg-2 column-1"></div>
        <div className="col-lg-6 column-2 general-font">
          <div className="skill-div">
            <hr className="skill-hr"></hr>
            <p className="skill">SKILLS</p>
          </div>
        </div>
        <div className="col-lg-4 column-3 general-font">
          <p className="contact">CONTACT ME</p>
          <hr className="contact-hr"></hr>
        </div>
      </div>
    </div>
  );
}

export default Home;
