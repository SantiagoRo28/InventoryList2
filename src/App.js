import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder'
import Nav from 'react-bootstrap/Nav'
import { Navbar, NavDropdown } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'



function App() {
  return (
    <Container fluid="md" className=" justify-content-md-center">
      <Navbar bg="light" expand="lg">

        <Navbar.Brand href="#home">NEWBRAND</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Point of Sale</Nav.Link>
            <Nav.Link href="#link">Cart icon</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </Container>
  );
}

export default App;
