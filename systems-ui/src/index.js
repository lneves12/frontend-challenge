import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import "typeface-roboto" // TODO: review fonts
// import 'bootstrap/dist/css/bootstrap.min.css'; TODO: troubleshoot why this is not working with the currently webpack configuration

ReactDOM.render(<App />, document.getElementById("root"));

