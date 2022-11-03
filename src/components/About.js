import React from "react";

import email_logo from "../images/Mail.png";
import linkd_in from "../images/linkedin.png";
import twitter_icon from "../images/Twitter-Icon.png"
import facebook_icon from "../images/Facebook-Icon.png"
import instagram_icon from "../images/Instagram-Icon.png"
import github_icon from "../images/GitHub-Icon.png"

function About() {
  return (
    <div className="about-section">
      <h1 className="name"> Malusi Dzidzienyo </h1>
      <h3 className="role"> Aspiring Developer</h3>
      <h6 className="website"> Malusi.website </h6>
      <button className="button-1">
        <img className="email-logo" src={email_logo} alt="email-logo"></img>
        Email
      </button>
      <button className="button-2">
        <img className="linked-in" src={linkd_in} alt="linkedin-logo"></img>
        LinkedIn
      </button>

      <div className="about">
        <h3 className="about-header"> About</h3>

        <p className="text">
          I am an aspiring software developer and BSc IT student with a current
          interest in frontend development. I try to keep up with latest
          technologies/frameworks and best practices, and am always looking for
          new things to learn.
        </p>
        <h3 className="interest-header"> Interests </h3>
        <p className="interests">
          FIFA Legend. Football fanatic. Philosophy enthusiast and a avid rock
          and rap listener. Batman fanboy.Cinephile and visual arts lover.
        </p>
        <div className="footer-section">
         
          <img className="twitter" src={twitter_icon}></img>
          <img className="facebook" src={facebook_icon}></img>
          <img className="instagram" src={instagram_icon}></img>
          <img className="github" src={github_icon}></img>
        
        </div>
      </div>
    </div>
  );
}

export default About;