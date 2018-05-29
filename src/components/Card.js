import React from "react";
import injectSheet from "react-jss";
import twoLions from "../img/twoLions.jpg";
import lion from "../img/lion.jpg";
const gradient = "linear-gradient(rgb(43, 24, 76, 0.8), rgba(42, 53, 66, 0.9))";
const styles = theme => ({
  root: {
    height: 800,
    width: 400,
    backgroundColor: "tomato",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    borderWidth: "0px",
    borderBottomWidth: "5px",
    borderStyle: "solid",
    borderColor: "tomato",
    borderImage: `${theme.accentGradient} 100`,
    boxShadow: theme.shadow
  },
  title: {
    color: "white",
    fontFamily: "Arvo",
    paddingTop: 100,
    fontSize: 20,
    "&:before": {
      content: "'|'",
      paddingRight: 20
    },
    "&:after": {
      content: "'|'",
      paddingLeft: 20
    }
  }
});
const Card = ({ classes, children, img }) => {
  if (img === "lion") {
    return (
      <div
        className={classes.root}
        style={{ backgroundImage: `${gradient}, url(${lion})` }}
      >
        <span className={classes.title}>Perspective</span>
      </div>
    );
  } else {
    return (
      <div
        className={classes.root}
        style={{ backgroundImage: `${gradient}, url(${twoLions})` }}
      >
        <span className={classes.title}>Leadership</span>
      </div>
    );
  }
};

export default injectSheet(styles)(Card);
