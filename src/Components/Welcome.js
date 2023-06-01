import React from "react";
import "../Stylesheets/Welcome.css";
function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome_content">
        <div className="welcome_hello">
          <h1 className="hello">hello.</h1>
        </div>
        <div className="welcome_iam">
          <h1 className="iam">i <span>am</span></h1>
        </div>
        <div className="welcome_name">
          <h1 className="name">aravind</h1>
        </div>
        {/* <div className="tag">
          <h4>
            a <span>web developer</span> creating life on internet
            <span> ...</span>
          </h4>
        </div> */}
      </div>
    </div>
  );
}

export default Welcome;
