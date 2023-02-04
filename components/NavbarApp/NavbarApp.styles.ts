import styled from "styled-components";
import { Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";

export const Wrapper = styled(Navbar)`
  padding: 1rem 0;
  background-color: ${(props) => props.theme.colors.grey[2]};
  backdrop-filter: blur(5rem);

  .navbar-toggler {
    border: none;
    border-radius: 0.7rem;
    height: 50px;

    .navbar-toggler-icon {
      background-image: url("/images/menu-icon.svg");
    }
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }
`;

export const LinkItem = styled(Link)`
  color: ${(props) => props.theme.colors.white[0]};
  transition: ${(props) => props.theme.transition[0]};

  :hover {
    color: ${(props) => props.theme.colors.blue[0]};
  }
`;

export const SelectNavDropdown = styled(NavDropdown)`
  .dropdown-toggle.nav-link {
    color: ${(props) => props.theme.colors.white[0]};
    transition: ${(props) => props.theme.transition[0]};

    :hover {
      color: ${(props) => props.theme.colors.blue[0]};
    }
  }

  .dropdown-toggle.show {
    color: ${(props) => props.theme.colors.blue[0]};
  }

  .dropdown-menu.show {
    background-color: ${(props) => props.theme.colors.grey[2]};
    backdrop-filter: blur(5rem);
    box-shadow: ${(props) => props.theme.shadow[0]};
    border: none;
    padding: 0.5rem;

    .nav-link {
      padding: 0.3rem 0.5rem;

      a:hover {
        margin-left: 0.5rem;
      }
    }
  }
`;
