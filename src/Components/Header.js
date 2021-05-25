import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/Header.css";
function Header() {
  return (
    <div className="nav">
      <div className="top_layer">
        <div className="nav_left">
          <Link to="/">
            <h2>
              aravind<span className="span_color">.</span>r
            </h2>
          </Link>
        </div>
        <div className="nav_right">
          <ul>
            <Link to="/about">
              <li>
                <a>
                  <span className="span_color">.</span>about ( )
                </a>
              </li>
            </Link>
            <Link to="/work">
              <li>
                <a>
                  <span className="span_color">.</span>work ( )
                </a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a>
                  <span className="span_color">.</span>contact ( )
                </a>
              </li>
            </Link>

            <li>
              <a
                href="https://drive.google.com/file/d/1KTmcQf6Mcc6nceAIZfr1VtIKzXkWY3yb/view?usp=sharing"
                download
                target="_blank"
                rel="noreferrer"
              >
                <span className="span_color">.</span>resume ( )
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
