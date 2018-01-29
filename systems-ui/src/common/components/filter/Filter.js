import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _some from 'lodash/some'
import {getAllStates, getStateIdentifier} from "../../business/systemsState";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.onFilterBy = this.onFilterBy.bind(this);
    this.state = {
      filteredBy: {
        [getStateIdentifier()]: getAllStates().map((state) => state.value),
      },
    };
  }

  render() {
    const filteredItems = this.props.items.filter(
      (item) => _some(this.state.filteredBy, (filters, typeKey) =>
        filters.find((filterValue) => filterValue === item[typeKey])
      )
    );

    return this.props.children({
      onFilterBy: this.onFilterBy,
      selectedFilters: this.state.filteredBy,
      filteredItems,
    });
  }

  onFilterBy(typeKey, value) {
    this.setState((state) => {
      return {
        ...this.getStateAfterFilterToggle(state.filteredBy, typeKey, value)
      };
    });
  }

  getStateAfterFilterToggle(filteredBy, typeKey, value) {
    const filterGroup = filteredBy[typeKey] || [];
    const hasFilterSelected = filterGroup.find((filterValue) => filterValue === value);

    if(hasFilterSelected) {
      return {
        filteredBy: {
          ...filteredBy,
          [typeKey]: [...filterGroup.filter((filterValue) => filterValue !== value)],
        }
      };
    }

    return {
      filteredBy: {
        ...filteredBy,
        [typeKey]: [...filterGroup, value ],
      }
    };
  }
}

Filter.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
};

export default Filter;
