import {findStateByValue, getAllStates, getBorderClassByValue, getStateIdentifier} from "./systemsState";

const allStates = [
  {value: 1, description: 'Free', borderClassName: 'border-success', color: "#28a745" },
  {value: 2, description: 'Busy', borderClassName: 'border-warning', color: "#ffc107" },
  {value: 3, description: 'Down', borderClassName: 'border-danger', color: "#dc3545" },
]

describe("Test systems state logic", () => {
  it('should return all states on getAllStates call', () => {
    const returnedStates = getAllStates();

    expect(returnedStates).toEqual(allStates);
  });

  it('should return state identifier on getStateIdentifier call', () => {
    const returnedStateIdentifier = getStateIdentifier();

    expect(returnedStateIdentifier).toEqual('provision_state_id');
  });

  it('should return border class on getBorderClassByValue call with a value', () => {
    const returnedBorderClass1 = getBorderClassByValue(1);
    const returnedBorderClass2 = getBorderClassByValue(2);
    const returnedBorderClass3 = getBorderClassByValue(3);
    const returnedBorderClass = getBorderClassByValue();

    expect(returnedBorderClass1).toEqual('border-success');
    expect(returnedBorderClass2).toEqual('border-warning');
    expect(returnedBorderClass3).toEqual('border-danger');
    expect(returnedBorderClass).toEqual(undefined);
  });

  it('should return the correct state on findStateByValue call with a value', () => {
    const returnedStateClass = findStateByValue();
    const returnedStateClass2 = findStateByValue(2);
    const returnedStateClass3 = findStateByValue(3);

    expect(returnedStateClass2).toEqual({value: 2, description: 'Busy', borderClassName: 'border-warning', color: "#ffc107" });
    expect(returnedStateClass3).toEqual({value: 3, description: 'Down', borderClassName: 'border-danger', color: "#dc3545" });
    expect(returnedStateClass).toEqual(undefined);
  });
})
