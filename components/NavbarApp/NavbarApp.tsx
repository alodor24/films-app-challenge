import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import * as SC from "./NavbarApp.styles";

const NavbarApp = () => {
  return (
    <SC.Wrapper collapseOnSelect expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Image src={Logo} width={50} alt="Logo App" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link>
              <SC.LinkItem href="/">Home</SC.LinkItem>
            </Nav.Link>
            <Nav.Link>
              <SC.LinkItem href="/favorites">My favorites list</SC.LinkItem>
            </Nav.Link>
            <SC.SelectNavDropdown title="Categories" id="basic-nav-dropdown">
              <Nav.Link>
                <SC.LinkItem href="/movies">Movies</SC.LinkItem>
              </Nav.Link>
              <Nav.Link>
                <SC.LinkItem href="/series">Series</SC.LinkItem>
              </Nav.Link>
            </SC.SelectNavDropdown>
          </Nav>

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </SC.Wrapper>
  );
};

export default NavbarApp;
