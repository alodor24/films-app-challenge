import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const Wrapper = styled(Navbar)`
  padding: 1rem 0;
  background-color: green;

  .navbar-toggler {
    background-color: blue;
    border: none;
    border-radius: 0;
    height: 50px;
  }
`;
