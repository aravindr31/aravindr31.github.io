import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import "../Stylesheets/Header.css";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  fullList: {
    width: "auto",
    background: "#0C0C1D",
    height: "calc(100vh - 130px)",
    cursor: "pointer",
  },
  list: {
    fontSize: "17px",
    fontWeight: "500",
  },
  button: {
    color: "#ffffff",
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
    "&:hover": {
      color: "#64ffda",
    },
  },
});

function Header() {
  const [show, setShow] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShow(!show);
  };
  const list = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <Link to="/about" className={classes.link}>
          <ListItem button key="1">
            <ListItemText className={classes.list}>
              <span className="span_color">.</span>about ( )
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/work" className={classes.link}>
          <ListItem button key="2">
            <ListItemText>
              <span className="span_color">.</span>work ( )
            </ListItemText>
          </ListItem>
        </Link>
        <Link to="/contact" className={classes.link}>
          <ListItem button key="3">
            <ListItemText>
              <span className="span_color">.</span>contact ( )
            </ListItemText>
          </ListItem>
        </Link>
        <a
          href="https://drive.google.com/file/d/1KTmcQf6Mcc6nceAIZfr1VtIKzXkWY3yb/view?usp=sharing"
          download
          target="_blank"
          className={classes.link}
        >
          <ListItem button key="4">
            <ListItemText>
              <span className="span_color">.</span>resume ( )
            </ListItemText>
          </ListItem>
        </a>
      </List>
    </div>
  );

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
        <div className="header_on_smallScreen">
          <Button className={classes.button} onClick={toggleDrawer()}>
            <MenuOutlinedIcon />
          </Button>
          <SwipeableDrawer
            anchor="bottom"
            open={show}
            onClose={toggleDrawer()}
            onOpen={toggleDrawer()}
          >
            {list()}
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
}

export default Header;
