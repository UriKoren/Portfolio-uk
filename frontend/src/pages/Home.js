import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Uri </h2>
        <div className="prompt">
          <p>A Full Stack web developer, Currently working as a freelance web developer and looking for a position where we can grow and develop together
          </p>
          <a href="https://www.linkedin.com/in/uri-koren-fullstack-developer/"><LinkedInIcon /></a>
          <EmailIcon />
          <a href="https://github.com/UriKoren"><GithubIcon /></a>
        
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
             BootStrap, MaterialUI 
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, Django 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;