import {filterItemsBySelection, getFiltersAfterFilterToggle} from './util';
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

describe("test getFiltersAfterFilterToggle", () => {

  it('should return the same state after add and remove same filter', () => {
    let expectedFilters = getFiltersAfterFilterToggle({filteredBy: {}, typeKey: getStateIdentifier(), value: 1});

    expect(expectedFilters).toEqual({[getStateIdentifier()]: [1]});

    expectedFilters = getFiltersAfterFilterToggle({filteredBy: expectedFilters, typeKey: getStateIdentifier(), value: 1});

    expect(expectedFilters).toEqual({[getStateIdentifier()]: []});
  });

  it('should return the correct selection after toggle 3 filters', () => {

    let expectedFilters = getFiltersAfterFilterToggle({filteredBy: {}, typeKey: getStateIdentifier(), value: 1});
    expectedFilters = getFiltersAfterFilterToggle({filteredBy: expectedFilters, typeKey: getStateIdentifier(), value: 2});
    expectedFilters = getFiltersAfterFilterToggle({filteredBy: expectedFilters, typeKey: getStateIdentifier(), value: 3});

    expect(expectedFilters).toEqual({[getStateIdentifier()]: [1,2,3]});
  })

})
