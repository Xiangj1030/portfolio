import React from "react";
import "./Experience.styles.css";

import { ReactComponent as GithubIcon } from "../../../assets/images/github.svg";
import { ReactComponent as InstaIcon } from "../../../assets/images/instagram.svg";
import { ReactComponent as MailIcon } from "../../../assets/images/mail.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/images/linkedin.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/images/phone.svg";

function Experience() {
  return (
    <div>
      <div className="Experience">
        <div className="Experience-study" id="Study-page">
          {/* left side - study - top */}
          <div>
            <li>
              <dt>Front End Web Development</dt>
              <dd>2019 - Present Online Courses </dd>
            </li>
            <li>
              <dt>MA, Politics and International Relations</dt>
              <dd>2017.09 - 2018.09 University of Nottingham</dd>
            </li>
            <li>
              <dt>BA, English (EU Affairs)</dt>
              <dd>
                2012.09 - 2016.09 Binhai School of Foreign Affairs of Tianjin
                Foreign Studies University
              </dd>
            </li>
          </div>
        </div>
        <div className="Experience-work" id="Experience-page">
          <li>
            <dt> Rizji’s Interview Helper team</dt>
            <dd>2020.7- Present</dd>
          </li>
          <li>
            <dt> Translator (English/Chinese) </dt>
            <dd>Freelance</dd>
            <dd>2014- Present</dd>
          </li>
          <li>
            <dt> The Phoenix Partnership</dt>
            <dd>China Product Specialist</dd>
            <dd>2018.11 – 2019.06</dd>
          </li>
          <li>
            <dt>National Development and Reform Commission of China</dt>
            <dd>Event Coordinator</dd>
            <dd>2015.07-2017.08</dd>
          </li>
        </div>
      </div>
      {/* left side - study - bottom - contact */}
      <div className="Experience-contact" id="Contact">
        <GithubIcon />
        <a href="https://www.instagram.com/madeleine_ji/" target="_blank">
          <InstaIcon />
        </a>
        {/* <a href="tel:07742281687">
          <PhoneIcon />
        </a> */}
        <a href="https://www.linkedin.com/in/xiang-j-58152116b" target="_blank">
          <LinkedinIcon />
        </a>
        <a href="mailto:xiangj1030@gmail.com">
          <MailIcon />
        </a>
      </div>
    </div>
  );
}

export default Experience;
