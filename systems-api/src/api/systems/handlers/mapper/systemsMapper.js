'use strict';

// We could map/format/normalise the db system here, for now lets return the system with the same "DB" structure
function normaliseDBSystem (system) {
  return Object.assign({}, system, {
    provision_state_id: Math.floor(Math.random()*3) + 1,
  });
}

module.exports = {
  normaliseDBSystem
};
