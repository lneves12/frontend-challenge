import React, {Component} from "react";
import PropTypes from "prop-types";
import suseLogo from "./suse.svg";
import styles from "./Header.css"

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img width="50" src={suseLogo} alt="logo" />
            <span className={styles.brandText}> Systems Dashboard</span>
          </a>
        </nav>
    );
  }
}

Header.propTypes = {};

export default Header;
