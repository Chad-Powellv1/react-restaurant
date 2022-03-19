import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cafe from './assets/cafe.png';
import './App.css';

export default function App({children}) {
  return (
    <div className="App">
      <Navbar expand="lg">
        <Container className='container-fluid mb-5'>
            <Navbar.Brand href="/" className='navbarBrand d-none d-lg-block  position-absolute top-0 start-0 ps-5 mt-2'><img src={cafe} alt="Cafe Logo" width= '300' /></Navbar.Brand>
            <Navbar.Toggle className='custom-toggler' aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav text-start">
            <Nav className="mx-auto text-center mt-2 ps-5 mt-5 pt-4 fs-4">
                <Nav.Link href='/' className="px-5 fs-2 fw-bold text-light menu">Home</Nav.Link>
                <Nav.Link href='menu' className="px-5 fs-2 fw-bold text-light menu">Menu</Nav.Link>
                <Nav.Link href="specials" className="px-5 fs-2 fw-bold text-light menu">House Favorites</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
     {children}    
    </div> 
  );
};