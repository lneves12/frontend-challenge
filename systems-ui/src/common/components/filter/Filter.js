import {Component} from 'react';
import PropTypes from 'prop-types';
import {getAllStates, getStateIdentifier} from "../../business/systemsState";
import {filterItemsBySelection, getFiltersAfterFilterToggle} from "./util";

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
    return this.props.children({
      onFilterBy: this.onFilterBy,
      selectedFilters: this.state.filteredBy,
      filteredItems: filterItemsBySelection(this.props.items, this.state.filteredBy),
    });
  }

  onFilterBy({typeKey, value}) {
    this.setState((state) => {
      return {
        filteredBy: getFiltersAfterFilterToggle({filteredBy: state.filteredBy, typeKey, value})
      };
    });
  }

}

Filter.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
};

export default Filter;
