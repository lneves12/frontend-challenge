import React, {Component} from "react";
import suseLogo from "./suse.svg";
import styles from "./Header.css"
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to='/' className="navbar-brand">
          <img width="50" src={suseLogo} alt="logo" />
          <span className={styles.brandText}> Systems Dashboard</span>
        </Link>
      </nav>
    );
  }
}

export default Header;
