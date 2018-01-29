import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {VictoryPie} from "victory";
import styles from "./SystemsStatusOverview.css";
import classnames from "classnames";

class SystemsStatusOverview extends Component {

  render() {
    let pieOverview = [
      {id: 1, x: "Free", y: 0},
      {id: 2, x: "Busy", y: 0},
      {id: 3, x: "Down", y: 0},
    ]

    this.props.systems.forEach((system) => {
      const group = pieOverview.find((group) => group.id === +system.provision_state_id);
      if(group) {
        group.y += 1;
      }
    });

    return (
      <div className="row">
        <div className={classnames("col-3", styles.filtersGroup)}>
          <legend>System State</legend>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
                   type="radio" name="inlineRadioOptions"
                   id="inlineRadio1"
                   value="last_boot"
                   onClick={() => this.props.onFilterBy("provision_state_id", 1)} />
            <label className="form-check-label" htmlFor="inlineRadio1">Free</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
                   type="radio"
                   name="inlineRadioOptions"
                   id="inlineRadio2"
                   value="modified"
                   onClick={() => this.props.onFilterBy("provision_state_id", 2)} />
            <label className="form-check-label" htmlFor="inlineRadio2">Busy</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
                   type="radio"
                   name="inlineRadioOptions"
                   id="inlineRadio2"
                   value="modified"
                   onClick={() => this.props.onFilterBy("provision_state_id", 3)} />
            <label className="form-check-label" htmlFor="inlineRadio2">Down</label>
          </div>
        </div>
        <div className={classnames("col-6", styles.container)}>
          <VictoryPie
            animate={{ duration: 1000 }}
            colorScale={["#28a745", "#ffc107", "#dc3545" ]}
            data={pieOverview} />
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
  systems: PropTypes.array.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  onFilterBy: PropTypes.func.isRequired,
};

export default SystemsStatusOverview;
