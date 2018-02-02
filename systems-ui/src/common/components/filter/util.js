import _some from "lodash/some";

export function filterItemsBySelection(items, selection) {
  return items.filter(
    (item) => _some(selection, (filters, typeKey) =>
      filters.find((filterValue) => filterValue === item[typeKey])
    )
  )
}


export function getFiltersAfterFilterToggle({filteredBy = {}, typeKey, value}) {
  const filterGroup = filteredBy[typeKey] || [];
  const hasFilterSelected = filterGroup.find((filterValue) => filterValue === value);

  if(hasFilterSelected) {
    return {
        ...filteredBy,
        [typeKey]: filterGroup.filter((filterValue) => filterValue !== value),
    };
  }

  return {
      ...filteredBy,
      [typeKey]: [...filterGroup, value ],
  };
}
