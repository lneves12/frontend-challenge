import {Component} from 'react';
import PropTypes from 'prop-types';
import {getAllProducts} from "../../../services/systemsApiService";
import {getFormattedNow} from "../../../utils/date/date";
import systemDetailMock from "./mocks/system-details";

const REFRESH_TIME = 2000;

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
        if(this.props.polling) {
          this.refreshInterval = setInterval(() => {
            this.refreshSystems()
          }, REFRESH_TIME);
        }
      })
      .catch((error) => {
        this.setState({
          isSystemsLoading: false,
          systems: undefined,
          error: error,
        })
      });
  }

  componentWillUnmount() {
    this.refreshInterval && clearInterval(this.refreshInterval);
  }


  render() {
    return this.props.children({
      systems: this.state.systems && this.state.systems.slice(0, 200),
      isSystemsLoading: this.state.isSystemsLoading,
      error: this.state.error,
      lastUpdated: this.state.lastUpdated,
      getProductById: (id) => systemDetailMock.return[0][id]
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
  polling: PropTypes.bool,
};

export default SystemsOrchestrator;
