import React from "react";
import profilepic from '../images/profile-pic.jpeg';
function Info(){
    return (
      <div className="info-section">
        <img
          className="profile-pic"
          src={profilepic}
          alt=""/>
      
      </div>
    );
}

export default Info