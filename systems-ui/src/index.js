import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import "typeface-roboto"
// I added some problems loading the bootstrap css through webpack, probably some conflict with the webpack css-loader order or post-css
// I don't think it's worth it to troubleshoot this problem further for the scope of this challenge
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById("root"));

