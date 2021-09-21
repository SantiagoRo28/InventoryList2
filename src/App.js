import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, } from 'react-bootstrap';


function App() {
  return (
    <Container fluid="md" className="bg-secondary justify-content-md-center">
  <Row>
    <Col xs lg="2">
      NEWBRAND
      </Col>
    <Col xs={6} md="auto">Home</Col>
    <Col xs lg="2">
      Store
      </Col>
      <Col xs lg="2">
      About
      </Col>
      <Col xs lg="2">
      Blog
      </Col>
      <Col xs lg="2">
      Point of sale
      </Col>
  </Row>
  <Row>
    <Col >
    1 of 3
    </Col>
    <Col xs={5} md="auto">
      2 of 3 (wider)
      </Col>
    <Col xs lg="2">
      3 of 3
      </Col>
  </Row>
</Container>
    );
}

export default App;
