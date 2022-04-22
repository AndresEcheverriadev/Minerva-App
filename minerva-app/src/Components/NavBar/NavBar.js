import { NavLink } from 'react-router-dom'
import Navbar  from "react-bootstrap/Navbar"
import Container  from "react-bootstrap/Container"
import Nav  from "react-bootstrap/Nav"
import NavDropdown  from "react-bootstrap/NavDropdown"
import CartWidget from "../Widgets/CartWidget"
import BrandLogo from "../BrandLogo/BrandLogo"
import Social from "../Social/Social"
import './Navbar.css'

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
        <NavLink to='porqueMinerva' className='NavBarLinkNosotros' style={{color:'rgba(255,255,255,.55)'}}>¿Por qué Minerva?</NavLink>
        <NavDropdown title="Joyas" id="collasible-nav-dropdown">
          <NavDropdown.Item href=""><NavLink to="categoria/Aros">Aros</NavLink></NavDropdown.Item>
          <NavDropdown.Item href=""><NavLink to="categoria/Anillos">Anillos</NavLink></NavDropdown.Item>
          <NavDropdown.Item href=""><NavLink to="categoria/Collares">Collares</NavLink></NavDropdown.Item>
          <NavDropdown.Item href=""><NavLink to="categoria/Pulseras">Pulseras</NavLink></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Ropa" id="collasible-nav-dropdown">
          <NavDropdown.Item href=""><NavLink to="categoria/Tops">Tops</NavLink></NavDropdown.Item>
          <NavDropdown.Item href=""><NavLink to="categoria/Bodys">Bodys</NavLink></NavDropdown.Item>
          <NavDropdown.Item href=""><NavLink to="categoria/Pañuelos">Pañuelos</NavLink></NavDropdown.Item>
          <NavDropdown.Item href=""><NavLink to="categoria/Cinturones">Cinturones</NavLink></NavDropdown.Item>
        </NavDropdown>
        <NavLink to='/' >
          <Social/>
        </NavLink>
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