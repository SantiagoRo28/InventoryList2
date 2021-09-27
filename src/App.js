import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder'
import Nav from 'react-bootstrap/Nav'



function App() {
  return (
    <Container fluid="md" className=" justify-content-md-center">
  <Row>
    <Col xs = {12} md={8} lg="2">
      NEWBRAND
      </Col>
    <Col xs={6} md="auto">
      Home
    </Col>
    <Col xs md={8} lg="2">
      Store
      </Col>
      <Col xs md={8} lg="2">
      About
      </Col>
      <Col xs md={8} lg="2">
      Blog
      </Col>
      <Col xs md={8} lg="2">
      Point of sale
      </Col>
      <Col xs md lg="22">
      Cart icon
      </Col>
  </Row>

  


   <Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
    <Card.Title>NEWBRAND</Card.Title>
      <Nav.Item>
        <Nav.Link href="#first">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Store</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Point of sale</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Cart icon
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title className="bg-secondary justify-content-md-center">New Clothing Collection</Card.Title>
    <Button style={{ width: '18rem' }} className="bg-secondary justify-content-md-center">Shop Now</Button>
  </Card.Body>
</Card>


<div className="d-flex justify-content-around">
  <Card style={{ width: '18rem' }} xs={12} fluid="md" className="bg-secondary justify-content-md-center">
   <Card.Body xs={12} md={8} lg="22">
     
   </Card.Body>


  </Card>
</div>
 
</Container>
    );
}

export default App;
