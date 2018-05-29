import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import Card from "./Card.js";
const styles = theme => ({
  root: {
    height: 600,
    backgroundColor: "tomato",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Block = ({ classes, children, color, right, img }) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div>
        {right ? (
          <div className={classes.flex}>
            <div>{children}</div>
          </div>
        ) : (
          <Card img={img} />
        )}
      </div>
      {right ? (
        <Card img={img} />
      ) : (
        <div className={classes.flex}>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

Block.propTypes = {
  color: PropTypes.string.isRequired
};

export default injectSheet(styles)(Block);
