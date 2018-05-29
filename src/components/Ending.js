import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
const styles = theme => ({
  root: {
    height: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  greyHeading: {
    color: "#838a96",
    fontWeight: 400,
    fontFamily: "Arvo",
    fontSize: 40,
    width: 500,
    "&:before": {
      content: "' |'",
      paddingRight: 20,
      color: "#fb6976"
    },
    "&:after": {
      content: "'| '",
      paddingLeft: 20,
      color: "#fb6976"
    }
  }
});
const Ending = ({ classes, children }) => (
  <div className={classes.root}>
    <h2 className={classes.greyHeading}>
      5Lion is a diversified holding compay based in McLean, VA
    </h2>
  </div>
);

export default injectSheet(styles)(Ending);
