import React, {Component} from "react";
import suseLogo from "./suse.svg";
import styles from "./Header.css"

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-brand">
            <img width="50" src={suseLogo} alt="logo" />
            <span className={styles.brandText}> Systems Dashboard</span>
          </div>
        </nav>
    );
  }
}

export default Header;
