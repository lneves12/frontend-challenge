import {Component} from 'react';
import PropTypes from 'prop-types';
import {getAllProducts} from "../../../services/systemsApiService";
import {getFormattedNow} from "../../../utils/date/date";

const REFRESH_TIME = 4000;

// This container helps to manage everything related with the systems fetching/saving data and could be used everywhere. (listing, detail, etc)
// We could even add some cache logic here if necessary or even add redux if the app complexity grow justifies it
class SystemsOrchestrator extends Component {

  constructor() {
    super();
    this.state = {
      isSystemsLoading: true,
      systems: undefined,
      error: undefined,
      lastUpdated: undefined,
    };
  }


  componentDidMount() {
    getAllProducts()
      .then((systems) => {
        this.setState({
          systems,
          isSystemsLoading: false,
          lastUpdated: getFormattedNow(),
        })
        this.refreshInterval = setInterval(() => {
          this.refreshSystems()
        }, REFRESH_TIME);
      })
      .catch((error) => {
        this.setState({
          isSystemsLoading: false,
          systems: undefined,
          error: undefined,
        })
      });
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }


  render() {
    return this.props.children({
      systems: this.state.systems,
      isSystemsLoading: this.state.isSystemsLoading,
      error: this.state.error,
      lastUpdated: this.state.lastUpdated,
    });
  }

  // We could also use a websocket approach here instead of polling, but I think it would be too much regarding the scope of this challenge :)
  refreshSystems() {
    getAllProducts()
      .then((systems) => {
        this.setState({
          systems,
          lastUpdated: getFormattedNow(),
        })
      })
      .catch((error) => {
        console.error(error)
      });
  }
}

SystemsOrchestrator.propTypes = {
  children: PropTypes.func.isRequired,
};

export default SystemsOrchestrator;
