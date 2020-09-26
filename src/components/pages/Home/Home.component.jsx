import React from "react";
import "./Home.styles.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
  return (
    <div>
      <div>
        <div className="Home-left-sidebar">
          <AnchorLink className="Home-sidebar-content" href="#Study-page">
            EDUCATION
          </AnchorLink>
          <AnchorLink className="Home-sidebar-content" href="#Experience-page">
            EXPERIENCE
          </AnchorLink>
        </div>

        <div className="Home-column-top">
          <div className="Home-top-allcontext">
            <div className="Home-top-intro">
              <p>TRANSLATOR</p>
              <p>WEB DEVELOPER</p>
              <p>PRODUCT SPECIALIST</p>
            </div>
            <h1 className="Home-top-context">XIANG JI</h1>
            <hr className="Home-main-hr"></hr>
          </div>
          <div className="Home-topping">
            <li>
              <p className="Home-topping-context">
                A MA International Relations graduate from University of
                Nottingham
              </p>
            </li>
            <li>
              <p className="Home-topping-context">
                Quick learner, creative, customer-facing, provlem-solver
                focused, IT geek
              </p>
            </li>
          </div>
        </div>
      </div>

      {/* Home-bottom-skills and contact */}
      <div className="Home-column-bottom">
        <div className="col-lg-2 Home-column-1"></div>
        <div className="col-lg-6 Home-column-2">
          <div className="Home-skill-div">
            <hr className="Home-skill-hr"></hr>
            <p className="Home-skill">
              <AnchorLink className="Home-skill-link" href="#Skill-page">
                SKILLS
              </AnchorLink>
            </p>
          </div>
        </div>
        <div className="col-lg-4 Home-column-3">
          <p className="Home-contact">
            <AnchorLink className="Home-skill-link" href="#Contact">
              CONTACT ME
            </AnchorLink>
          </p>
          <hr className="Home-contact-hr"></hr>
        </div>
      </div>
    </div>
  );
}

export default Home;
