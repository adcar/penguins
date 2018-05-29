import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
const styles = theme => ({
  root: {
    height: 100,
    position: "fixed",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    transition: "all 0.25s ease-out"
  },
  link: {
    padding: 10,
    margin: "0 10px",

    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 14,
    color: "inherit"
  }
});

class Navbar extends React.Component {
  state = {
    scrolled: false
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        this.setState({
          scrolled: true
        });
      } else {
        this.setState({
          scrolled: false
        });
      }
    });
  }
  render() {
    const { classes, theme } = this.props;
    const { scrolled } = this.state;
    return (
      <nav
        className={classes.root}
        style={
          scrolled
            ? {
                backgroundColor: "white",
                boxShadow: "2px 4px 4px rgba(0,0,0,0.25)",
                color: "#fb6976"
              }
            : {
                backgroundColor: "transparent",
                boxShadow: "none",
                color: "white"
              }
        }
      >
        <img alt="placeholder" src="https://via.placeholder.com/100x50" />
        <div>
          <a href="#our-purpose" className={classes.link}>
            Our Purpose
          </a>
          <a href="#navigation" className={classes.link}>
            Navigation
          </a>
          <a href="#our-commitment" className={classes.link}>
            Our Commitment
          </a>
        </div>
      </nav>
    );
  }
}

export default injectSheet(styles)(Navbar);
