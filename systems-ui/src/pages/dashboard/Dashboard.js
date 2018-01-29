import React, {Component} from "react";
import SystemsOrchestrator from "../../common/components/systems/systems-orchestrator/SystemsOrchestrator";
import SystemOverview from "../../common/components/systems/system-overview/SystemOverview";
import styles from "./Dashboard.css";
import Loader from "../../common/components/loader/Loader";
import SystemsGrid from "../../common/components/systems/systems-grid/SystemsGrid";
import SystemsStatusOverview from "./systems-status-overview/SystemsStatusOverview";
import Filter from "../../common/components/filter/Filter";

class Dashboard extends Component {
  render() {
    return (
      <SystemsOrchestrator>
        {
          ({
             systems,
             isSystemsLoading,
             error,
             lastUpdated,
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
              <Filter items={systems}>
                {
                  ({
                     filteredItems,
                     onFilterBy
                   }) => (
                    <div className="container-fluid">
                      <SystemsStatusOverview
                        systems={filteredItems}
                        onFilterBy={onFilterBy}
                        lastUpdated={lastUpdated} />
                      <SystemsGrid
                        systems={filteredItems}
                        renderSystem={ ({system}) => <SystemOverview system={system} /> } />
                    </div>

                  )
                }
              </Filter>
            )
          }
        }
      </SystemsOrchestrator>
    );
  }
}

export default Dashboard;
