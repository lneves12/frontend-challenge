import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SystemDetail from "./pages/system-detail/SystemDetail";
import Dashboard from "./pages/dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import "./index.css";
import "typeface-roboto"
// I added some problems loading the bootstrap css through webpack, probably some conflict with the webpack css-loader order or post-css
// I don't think it's worth it to troubleshoot this problem further for the scope of this challenge
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/system' component={SystemDetail} />
    </App>
  </Router>
  , document.getElementById("root"));

