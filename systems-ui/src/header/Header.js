import React, {Component} from "react";
import PropTypes from "prop-types";
import suseLogo from "./suse.svg";
import styles from "./Header.css"

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <img src={suseLogo} className={styles.logo} alt="logo" />
        <h1 className={styles.title}>Welcome to the SUSE systems dashboard</h1>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
