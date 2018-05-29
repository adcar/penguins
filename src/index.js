import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider } from "react-jss";

const theme = {
  spacing: {
    unit: 10
  },
  accentGradient: "linear-gradient(to right, #ff0844, #ffb199)",
  shadow: "rgba(0, 0, 0, 0.25) 1px 4px 18px 10px"
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
