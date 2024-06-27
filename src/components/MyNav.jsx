import { Nav, Navbar, Container, NavLink } from "react-bootstrap";

const MyNav = props => (
  <Navbar className="bg-body-tertiary">
    <Container fluid="md">
      <Navbar.Brand href="#home">📚 EPIBOOKS</Navbar.Brand>
      <Nav>
        <NavLink href="#Home">Home</NavLink>
        <NavLink href="#Home">About</NavLink>
        <NavLink href="#Home">Browse</NavLink>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNav;
