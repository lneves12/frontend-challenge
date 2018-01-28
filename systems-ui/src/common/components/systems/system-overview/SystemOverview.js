import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './SystemOverview.css';
import {formatDateByTimestamp} from "../../../utils/date/date";

const SystemOverview = ({system}) => {
  return (
    <div className={classnames("card", styles.container)}>
      {/*<img className="card-img-top" alt="Card image cap"/> TODO: explore d3 graphic to include here*/}
      <div className="card-body">
        <h5 className="card-title">{system.name}</h5>
        <p className="card-text">{system.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{formatDateByTimestamp(system.modified)}</li>
        <li className="list-group-item">{formatDateByTimestamp(system.created)}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">View More</a>
      </div>
    </div>
  );
};

// TODO: Common proptypes definition
SystemOverview.propTypes = {
  system: PropTypes.object,
};

export default SystemOverview;
