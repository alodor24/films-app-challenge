import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import * as SC from "./NavbarApp.styles";

const NavbarApp = () => {
  return (
    <SC.Wrapper collapseOnSelect expand="lg" fixed="top">
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
            <SC.NavItem>
              <SC.LinkItem href="/">Home</SC.LinkItem>
            </SC.NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </SC.Wrapper>
  );
};

export default NavbarApp;
