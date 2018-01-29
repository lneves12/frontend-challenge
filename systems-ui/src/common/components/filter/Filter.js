import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.onFilterBy = this.onFilterBy.bind(this);
    this.state = {
      filteredBy: null,
    };
  }

  render() {
    let filteredItems;
    const filteredBy = this.state.filteredBy;
    if(this.state.filteredBy) {
      filteredItems = this.props.items.filter((item) => item[filteredBy.key] === filteredBy.value);
    } else {
      filteredItems = this.props.items;
    }

    return this.props.children({
      onFilterBy: this.onFilterBy,
      filteredItems,
    });
  }

  onFilterBy(key, value) {
    const filteredItems = this.props.items.filter((item) => item[key] === value);

    this.setState({
      filteredBy: {
        key,
        value,
      }
    });
  }
}

Filter.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
};

export default Filter;
