import React from "react";
import "./Skills.divcard.styles.css";

function Divcard(props) {
  return (
    <div className="Skills-mainbody">
      <div className="Skills-card">
        <li className="Skills-words">{props.words}</li>
        <div className="Skills-detail">{props.details}</div>
      </div>
    </div>
  );
}

export default Divcard;
