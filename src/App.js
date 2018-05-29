import React, { Component } from "react";
import injectSheet from "react-jss";
import "./icb.css";
import Splash from "./components/Splash";
import Block from "./components/Block";
import Ending from "./components/Ending";
import Button from "./components/Button";
import WhiteButton from "./components/WhiteButton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const styles = theme => ({
  wrapper: {
    height: "100%"
  },
  title: {
    fontFamily: "Arvo",
    fontWeight: 400,
    color: "white",
    fontSize: 50,
    width: 740,
    "&:before": {
      content: "'| '"
    },
    "&:after": {
      content: "' |'"
    }
  },
  subheading: {
    fontFamily: "Arvo",
    fontWeight: 400,
    fontSize: 30,
    backgroundImage: theme.accentGradient,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  },
  desc: {
    width: 500,
    lineHeight: "1.5em",
    marginBottom: 50
  }
});
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Navbar />
        <Splash mountains>
          <h1 className={classes.title}>
            Invest in disruptive ideas and the people behind them
          </h1>
        </Splash>
        <Block color="white" img="two-lions">
          <h2 className={classes.subheading} id="our-purpose">
            Our Purpose.
          </h2>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec purus sollicitudin, tincidunt sem in, scelerisque ligula. In et
            enim rutrum, facilisis tellus at, volutpat tellus. Curabitur sit
            amet nisl diam. Sed a lacus nulla. Morbi eget nisl finibus, gravida
            nulla quis, congue justo. Nullam quis orci at magna vehicula
            elementum. Aliquam aliquam orci augue, sed posuere lorem mattis in.
            Pellentesque efficitur ultricies nibh, eget venenatis neque
            sollicitudin id. Suspendisse accumsan est sem, nec volutpat felis
            euismod ac.
          </p>
          <Button>Let's Talk</Button>
        </Block>
        <Splash road>
          <h2
            className={classes.subheading}
            style={{ textAlign: "center" }}
            id="navigation"
          >
            Our Ability to Navigate
          </h2>
          <p
            className={classes.desc}
            style={{ textAlign: "center", color: "white" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec purus sollicitudin, tincidunt sem in, scelerisque ligula. In et
            enim rutrum, facilisis tellus at, volutpat tellus. Curabitur sit
            amet nisl diam. Sed a lacus nulla.
          </p>
          <WhiteButton>Learn Now</WhiteButton>
        </Splash>
        <Block color="#e0e5e9" right img="lion">
          <h2 className={classes.subheading} id="our-commitment">
            Our Commitment.
          </h2>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec purus sollicitudin, tincidunt sem in, scelerisque ligula. In et
            enim rutrum, facilisis tellus at, volutpat tellus. Curabitur sit
            amet nisl diam. Sed a lacus nulla. Morbi eget nisl finibus, gravida
            nulla quis, congue justo. Nullam quis orci at magna vehicula
            elementum. Aliquam aliquam orci augue, sed posuere lorem mattis in.
            Pellentesque efficitur ultricies nibh, eget venenatis neque
            sollicitudin id. Suspendisse accumsan est sem, nec volutpat felis
            euismod ac.
          </p>
          <Button>Get Started</Button>
        </Block>
        <Ending />
        <Footer />
      </div>
    );
  }
}

export default injectSheet(styles)(App);
