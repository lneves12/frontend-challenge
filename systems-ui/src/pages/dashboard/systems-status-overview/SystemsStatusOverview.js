import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {VictoryPie} from "victory";
import styles from "./SystemsStatusOverview.css";
import classnames from "classnames";
import {getAllStates} from "../../../common/business/systemsState";
import {systemType} from "../../../common/types/systemsTypes";

class SystemsStatusOverview extends Component {

  render() {

    let pieOverviewData = getAllStates().map(state => ({
      id: state.value,
      x: state.description,
      y: 0,
    }))
    const pieColors = getAllStates().map(state => state.color);

    this.props.systems.forEach((system) => {
      const group = pieOverviewData.find((group) => group.id === +system.provision_state_id);
      if(group) {
        group.y += 1;
      }
    });

    return (
      <div className="row">
        <div className={classnames("col-3", styles.filtersGroup)}>
          <legend>System State</legend>
          {
            getAllStates().map((state) => (
              <div key={state.value} className="form-check form-check-inline">
                <input className="form-check-input"
                       type="checkbox"
                       id={`inlineCheckbox${state.value}`}
                       defaultChecked={this.props.selectedFilters.provision_state_id.includes(state.value)}
                       onClick={() => this.props.onFilterBy("provision_state_id", state.value)} />
                <label className="form-check-label" htmlFor={`inlineCheckbox${state.value}`}>{state.description}</label>
              </div>
            ))
          }

        </div>
        <div className={classnames("col-6", styles.container)}>
          <VictoryPie
            animate={{ duration: 1000 }}
            colorScale={pieColors}
            data={pieOverviewData} />
        </div>
        <div className={classnames("col-2", styles.filtersGroup)}>
          <dt>Last Updated</dt>
          <dd>{this.props.lastUpdated}</dd>
        </div>
      </div>
    );
  }
}

SystemsStatusOverview.propTypes = {
  systems: PropTypes.arrayOf(systemType.isRequired).isRequired,
  lastUpdated: PropTypes.string.isRequired,
  onFilterBy: PropTypes.func.isRequired,
  selectedFilters: PropTypes.object.isRequired,
};

export default SystemsStatusOverview;
