import Navbar  from "react-bootstrap/Navbar"
import Container  from "react-bootstrap/Container"
import Nav  from "react-bootstrap/Nav"
import NavDropdown  from "react-bootstrap/NavDropdown"


function NavBar() {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Minerva</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Nosotros</Nav.Link>
      <NavDropdown title="Joyas" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/2.1">Anillos</NavDropdown.Item>
        <NavDropdown.Item href="#action/2.2">Collares</NavDropdown.Item>
        <NavDropdown.Item href="#action/2.3">Pulseras</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Ropa" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Tops</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Bodys</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Pañuelos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Cinturones</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">cart</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}

export default NavBar