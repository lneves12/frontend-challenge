import React from 'react';
import classnames from 'classnames';
import styles from './SystemOverview.css';
import {formatDateByTimestamp} from "../../../utils/date/date";
import {getBorderClassByValue, getStateIdentifier} from "../../../business/systemsState";
import {systemType} from "../../../types/systemsTypes";
import { Link } from 'react-router-dom'

const SystemOverview = ({system}) => {
  const stateClass = getBorderClassByValue(system[getStateIdentifier()]);

  return (
    <div className={
      classnames(
        "card",
        styles.container,
        {[stateClass]: !!stateClass}
      )}>
      <div className="card-body">
        <h5 className="card-title">{system.name}</h5>
        <p className="card-text">{system.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Last Boot:</b> {formatDateByTimestamp(system.last_boot)}</li>
        <li className="list-group-item"><b>Modified:</b> {formatDateByTimestamp(system.modified)}</li>
      </ul>
      <div className="card-body">
        <Link to='/system' className="card-link">View More</Link>
      </div>
    </div>
  );
};

SystemOverview.propTypes = {
  system: systemType.isRequired,
};

export default SystemOverview;
