import React from "react";
import "../Stylesheets/Welcome.css";
function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome_content">
        <div className="welcome_hello">
          <h1>hello.</h1>
        </div>
        <div className="welcome_iam">
          <h1>i am</h1>
        </div>
        <div className="welcome_name">
          <h1>aravind</h1>
        </div>
        <div className="tag">
          <h4>a <span>javascript developer</span> who lives on the internet <span>...</span></h4>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
