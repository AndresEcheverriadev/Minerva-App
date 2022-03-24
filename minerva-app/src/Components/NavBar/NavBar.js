import './Navbar.css'
import Navbar  from "react-bootstrap/Navbar"
import Container  from "react-bootstrap/Container"
import Nav  from "react-bootstrap/Nav"
import NavDropdown  from "react-bootstrap/NavDropdown"
import CartWidget from "../Widgets/CartWidget"
import BrandLogo from "../BrandLogo/BrandLogo"
import { NavLink, Link } from 'react-router-dom'


function NavBar() {
  return (
<>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <NavLink to='/' >
      <BrandLogo/>
    </NavLink>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link >Nosotros</Nav.Link>
        <NavDropdown title="Joyas" id="collasible-nav-dropdown">
        <NavDropdown.Item href=""><NavLink to="categoria/Aros">Aros</NavLink></NavDropdown.Item>
        <NavDropdown.Item href=""><NavLink to="categoria/Anillos">Anillos</NavLink></NavDropdown.Item>
        <NavDropdown.Item href=""><NavLink to="categoria/Collares">Collares</NavLink></NavDropdown.Item>
        <NavDropdown.Item href=""><NavLink to="categoria/Pulseras">Pulseras</NavLink></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Ropa" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bodys</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Pañuelos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Cinturones</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <NavLink to='bolsa' >
          <CartWidget />
        </NavLink>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
  )
}

export default NavBar