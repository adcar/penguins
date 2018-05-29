import React from "react";
import injectSheet from "react-jss";
import Mountains from "../img/mountains.jpg";
import Road from "../img/road.jpg";
const styles = theme => ({
  root: {
    height: "110%",
    backgroundColor: "tomato",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
});
const gradient = "linear-gradient(rgb(43, 24, 76, 0.8), rgba(42, 53, 66, 0.6))";
const Splash = ({ classes, children, mountains }) => (
  <div
    className={classes.root}
    style={
      mountains
        ? { backgroundImage: `${gradient}, url(${Mountains})` }
        : { backgroundImage: `${gradient}, url(${Road})` }
    }
  >
    <div className={classes.center}>{children}</div>
  </div>
);

export default injectSheet(styles)(Splash);
