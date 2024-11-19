import React from "react";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditionally render the bio */}
      {bio && bio !== "" ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      {/* Render the Links */}
      <h3>Links</h3>
      <a href={github} target="_blank" rel="noopener noreferrer">
        {github}
      </a>
      <br />
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        {linkedin}
      </a>
    </div>
  );
}

export default About;
