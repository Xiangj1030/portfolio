import React from "react";
import "./Skills.styles.css";
import Divcard from "./Skill.divcard/Skills.divcard";
import Bottom from "./Skills.bottom/Skills.bottom";

function Skills() {
  return (
    <div className="Skills-body" id="Skill-page">
      <div className="Skills-top">
        <div className="Skills-top-content">
          <Divcard
            words="Organised"
            details="I am used to working on a tight timeframe, and prioritize my work with
          the help of either my schedule sheet or project manangment software
          such as Trello, Microsoft Teams, Jira, etc."
          />
          <Divcard
            words="Adaptable"
            details="I am able to adapt to new ways of working and changes easily. I am a highly disciplined, quick learner. In my working experience, I enjoyed working closely with different teams and performed well."
          />
          <Divcard
            words="Positive"
            details="I believe that a positive attitude and being proactive can really bring up efficiency in a team. I am passionate and committed to whatever I do, and work towards developing a positive atmosphere in the work place."
          />
          <Divcard
            words="Creative"
            details="I tend to think outside the box when it comes to a project that requires innovation. I love trying out new ideas and putting them into action. This demonstration portfolio is just one of many examples."
          />
        </div>
      </div>
      <div className="Skills-bottom">
        <Bottom />
      </div>
    </div>
  );
}

export default Skills;
