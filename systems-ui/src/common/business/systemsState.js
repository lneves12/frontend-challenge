const SYSTEM_STATE_KEY = 'provision_state_id';

const systemsState = {
  [SYSTEM_STATE_KEY]: [
    {value: 1, description: 'Free', borderClassName: 'border-success', color: "#28a745" },
    {value: 2, description: 'Busy', borderClassName: 'border-success', color: "#ffc107" },
    {value: 3, description: 'Down', borderClassName: 'border-success', color: "#dc3545" },
  ]
};

function findStateByValue(value) {
  return systemsState[SYSTEM_STATE_KEY].find((state) => state.value === value);
}


export function getAllStates() {
  return systemsState[SYSTEM_STATE_KEY];
}

export function getStateIdentifier() {
  return SYSTEM_STATE_KEY;
}

export function getBorderClassByValue(value) {
  const state = findStateByValue(value);

  return state && state.borderClassName;
}
