import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import cafe from './assets/cafe.png';

export default function App() {
  return (
    <div className="App">
      <Navbar className='navbar navbar-expand-lg' expand="lg">
        <Container className='container-fluid'>
            <Navbar.Brand href="/" className='navbar md-none position-absolute top-0 start-0 ps-5 mt-2'><img src={cafe} alt="Cafe Logo" width= '200' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center mt-2 ps-5 mt-5 pt-4 fs-4">
                <Nav.Link href='/' className="px-5">Home</Nav.Link>
                <Nav.Link href='menu' className="px-5">Menu</Nav.Link>
                <Nav.Link href="about" className="px-5">About</Nav.Link>
                <Nav.Link href='contact' className="px-5">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};