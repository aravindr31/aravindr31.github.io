import React from "react";
import "./AboutTag.css";
function AboutTag() {
  return (
    <div className="about_tag">
      <div className="about_tag_start">
        <h1><span className="span_color">c</span>ode</h1>
      </div>
      <div class="about_tag_center">
        <h1>bu<span className="span_color">i</span>ld</h1>
      </div>
      <div class="about_tag_end">
        <h1>deplo<span className="span_color">y</span>.</h1>
      </div>
    </div>
  );
}

export default AboutTag;
