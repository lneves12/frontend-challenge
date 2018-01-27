import React, { Component } from "react";
import styles from "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./header/Header";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header/>
        <Dashboard />
      </div>
    );
  }
}

export default App;
