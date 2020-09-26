import React from "react";
import "./Skills.bottom.css";

function Bottom() {
  return (
    <div className="Skills-bottom-content">
      <div>
        <dl>
          <dd>Front-end web development</dd>
          <dt>Visual Studio Code, Atom (Advanced)</dt>
          <dt>HTML, CSS, Bootstrap (Advanced)</dt>
          <dt>Javascript, React.js (Intermediate)</dt>
        </dl>
      </div>
      <div>
        <dl>
          <dd>Language</dd>
          <dt>English/Chinese Translation</dt>
          <dt>Chinese Mandarin (Native speaker)</dt>
          <dt>English (Fluent)</dt>
        </dl>
      </div>
      <div>
        <dl>
          <dd>Video editing</dd>
          <dt>Final Cut Pro, iMovie (Advanced)</dt>
        </dl>
        <dl>
          <dd>UX &amp; UI</dd>
          <dt>Adobe XD (Intermediate)</dt>
        </dl>
      </div>
      <div>
        <dl>
          <dd>Microsoft Suite</dd>
          <dt>Word, Excel, PowerPoint, Outlook, Teams</dt>
        </dl>
        <dl>
          <dd>Project Management</dd>
          <dt>Trello, Skype, Zoom, Jira</dt>
        </dl>
      </div>
    </div>
  );
}

export default Bottom;
