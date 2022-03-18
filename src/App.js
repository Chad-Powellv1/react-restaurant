import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import cafe from './assets/cafe.png';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Navbar className='navbar navbar-expand-lg' expand="lg">
        <Container className='container-fluid mb-5'>
            <Navbar.Brand href="/" className='navbarBrand sm-none position-absolute top-0 start-0 ps-5 mt-2'><img src={cafe} alt="Cafe Logo" width= '400' /></Navbar.Brand>
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
      
    <div className='container mt-5'>
      <div className='row mt-5 pt-5'>
        <h1 className='title display-1 text-center text-danger text-decoration-underline fw-bold mt-5'>Awesome Thyme Cafe</h1>
        <br/>
        <h3 className='subtitle display-6 mt-5 text-light mb-5'>Open Daily for Dine-in & Carry-out</h3>
        
        
        
        <div className='d-flex justify-content-center mt-5 pt-5'>
          <h4 className='mt-5 fs-3 mb-4 text-light'>Hours 11am to 10pm, Daily</h4>
        </div>

        <div className='d-flex justify-content-center mt-5 pt-3'>
          <h4 className='mt-3 fs-4'>348 East Main Street</h4>
        </div>

        <div className='d-flex justify-content-center'>
          <h4 className='city'>Lexington, KY 40507</h4>
        </div>
        <div className='d-flex justify-content-center'>
          <h4 className='phone'>(859) 555-1212</h4>
        </div>
      </div>
    </div>
 
    <Outlet />
    </div>
  );
};