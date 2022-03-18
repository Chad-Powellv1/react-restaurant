import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import cafe from './assets/cafe.png';
import { Outlet } from 'react-router-dom';

export default function App({children}) {
  return (
    <div className="App">
      <Navbar className='navbar navbar-expand-lg' expand="lg">
        <Container className='container-fluid mb-5'>
            <Navbar.Brand href="/" className='navbarBrand sm-none position-absolute top-0 start-0 ps-5 mt-2'><img src={cafe} alt="Cafe Logo" width= '300' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav text-start">
            <Nav className="mx-auto text-center mt-2 ps-5 mt-5 pt-4 fs-4">
                <Nav.Link href='/' className="px-5 fs-2 fw-bold text-dark">Home</Nav.Link>
                <Nav.Link href='menu' className="px-5 fs-2 fw-bold text-dark">Menu</Nav.Link>
                <Nav.Link href="about" className="px-5 fs-2 fw-bold text-dark">About</Nav.Link>
                <Nav.Link href='contact' className="px-5 fs-2 fw-bold text-dark">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    {children}    
    </div>
    
  );
};