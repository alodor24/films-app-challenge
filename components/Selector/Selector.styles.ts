import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

export const ContainerDropdown = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;

export const DropdownButton = styled(Dropdown.Toggle)`
  background: ${(props) => props.theme.gradient[0]};
  border: none;
`;

export const DropdownSelect = styled(Dropdown.Menu)`
  background-color: ${(props) => props.theme.colors.grey[2]};
  backdrop-filter: blur(5rem);
  box-shadow: ${(props) => props.theme.shadow[0]};
  border: none;
  padding: 0.5rem;

  .dropdown-item {
    padding: 0.3rem 0.5rem;
    color: ${(props) => props.theme.colors.white[0]};
    transition: ${(props) => props.theme.transition[0]};

    :hover {
      margin-left: 0.5rem;
      background-color: transparent;
      color: ${(props) => props.theme.colors.blue[0]};
    }
  }

  @media (max-width: 768px) {
    .dropdown-menu.show {
      backdrop-filter: none;
    }
  }
`;
