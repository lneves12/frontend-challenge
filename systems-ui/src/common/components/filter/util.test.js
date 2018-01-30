import {filterItemsBySelection, getStateAfterFilterToggle} from './util';
import {mockSystems} from './mocks/systems';
import {getStateIdentifier} from "../../business/systemsState";

describe("test filterItemsBySelection", () => {

  it('should return no items if no selection given', () => {
    const expectedItems = filterItemsBySelection(mockSystems, {});

    expect(expectedItems.length).toBe(0);
    expect(expectedItems).toEqual([]);
  });

  it('should filter the given items with the given selection', () => {
    const expectedItems = filterItemsBySelection(mockSystems, {[getStateIdentifier()] : [2]});
    const expectedItemsFull = filterItemsBySelection(mockSystems, {[getStateIdentifier()] : [1,2,3]});

    expect(expectedItems.length).toBe(1);
    expect(expectedItems[0][getStateIdentifier()]).toBe(2);
    expect(expectedItemsFull.length).toBe(3);
  });
})

describe("test getStateAfterFilterToggle", () => {

  it('should return the same state after add and remove same filter', () => {
    let expectedState = getStateAfterFilterToggle({}, getStateIdentifier(), 1);

    expect(expectedState).toEqual({
      filteredBy: {[getStateIdentifier()]: [1]}
    });

    expectedState = getStateAfterFilterToggle(expectedState, getStateIdentifier(), 1);

    expect(expectedState).toEqual({
      filteredBy: {[getStateIdentifier()]: []}
    });
  });

  it('should return the correct selection after toggle 3 filters', () => {
    let expectedState = getStateAfterFilterToggle({}, getStateIdentifier(), 1);
    expectedState = getStateAfterFilterToggle(expectedState, getStateIdentifier(), 2);
    expectedState = getStateAfterFilterToggle(expectedState, getStateIdentifier(), 3);

    expect(expectedState).toEqual({
      filteredBy: {[getStateIdentifier()]: [1,2,3]}
    });
  });

})
