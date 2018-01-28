import {Component} from 'react';
import PropTypes from 'prop-types';
import {getAllProducts} from "../../../services/systemsApiService";

// This container helps to manage everything related with the systems fetching/saving data and could be used everywhere. (listing, detail, etc)
// We could even add some cache logic here if necessary or even add redux if the app complexity grow justify it

class SystemsOrchestrator extends Component {

  constructor() {
    super();
    this.state = {
      isSystemsLoading: true,
      systems: undefined,
      error: undefined
    };
  }


  componentDidMount() {
    getAllProducts()
      .then((systems) => {
        this.setState({
          systems,
          isSystemsLoading: false
        })
      })
      .catch({
        isSystemsLoading: false,
        systems: undefined,
        error: undefined
      });
  }


  render() {
    return this.props.children({
      systems: this.state.systems,
      isSystemsLoading: this.state.isSystemsLoading,
      error: this.state.error
    });
  }
}

SystemsOrchestrator.propTypes = {
  children: PropTypes.func.isRequired,
};

export default SystemsOrchestrator;
