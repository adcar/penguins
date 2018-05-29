import React from "react";
import injectSheet from "react-jss";
const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: 100
  },
  link: {
    color: "#fb6976",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 12,
    padding: 10,
    margin: "0 10px"
  }
});
const Footer = ({ classes, children }) => (
  <div className={classes.root}>
    <img alt="placeholder" src="https://via.placeholder.com/100x50" />
    <div className={classes.links}>
      <a href="###" className={classes.link}>
        Our Purpose
      </a>
      <a href="##" className={classes.link}>
        Contact Us
      </a>
      <a href="##" className={classes.link}>
        Twitter
      </a>
      <a href="##" className={classes.link}>
        Facebook
      </a>
    </div>
  </div>
);

export default injectSheet(styles)(Footer);
