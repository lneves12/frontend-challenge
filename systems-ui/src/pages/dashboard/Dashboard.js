import React, {Component} from "react";
import PropTypes from "prop-types";
import {Col, Container, Row, Button} from "reactstrap";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Sistema 1</Col>
          <Col>Sistema 2</Col>
        </Row>
      </Container>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;
