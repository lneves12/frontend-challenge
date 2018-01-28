import React, {Component} from "react";
import SystemsOrchestrator from "../../common/components/systems/systems-orchestrator/SystemsOrchestrator";
import SystemOverview from "../../common/components/systems/system-overview/SystemOverview";
import styles from "./Dashboard.css";
import Loader from "../../common/components/loader/Loader";
import SystemsGrid from "./systems-grid/SystemsGrid";

class Dashboard extends Component {
  render() {
    return (
      <SystemsOrchestrator>
        {
          ({
             systems,
             isSystemsLoading,
             error,
           }) =>
          {
            if(isSystemsLoading) {
              return (
                <div className={styles.loaderContainer}>
                  <Loader/>
                </div>
              );
            }

            if(error) {
              return (
                <div>An error happened while accessing the systems api</div>
              );
            }

            return (
              <SystemsGrid
                systems={systems}
                renderSystem={ ({system}) => <SystemOverview system={system} /> } />
            )
          }
        }
      </SystemsOrchestrator>
    );
  }
}

export default Dashboard;
