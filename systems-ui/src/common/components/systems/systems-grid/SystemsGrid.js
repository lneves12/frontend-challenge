import React from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import styles from './SystemsGrid.css'

const SystemsGrid = ({systems, renderSystem}) => {
  return (
    <div className={styles.container}>
      <div className="row">
        {
          systems.map((system, position) => (
            <div
              key={system.id}
              className={classnames("col-lg-3 col-md-4 col-xs6", styles.system)}>
              {
                renderSystem({
                  system,
                  position
                })
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

SystemsGrid.propTypes = {
  systems: PropTypes.array.isRequired,
  renderSystem: PropTypes.func.isRequired,
};

export default SystemsGrid;
