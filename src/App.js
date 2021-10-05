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
      <div className="container mh-50 Carousel-container">

        <Row> 
          <div className="col-12">
          <h1 className="Text-banner"> New Clothing Collection</h1>
          </div>
           
          
          </Row>
        <div className="row justify-content-center"><div className="col-6 justify-content-center"><Button className="w-25 mr-10" variant="primary">Primary</Button>{' '}</div></div>


      </div>


    </Container>
  );
}

export default App;
