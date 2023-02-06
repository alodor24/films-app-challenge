import styled from "styled-components";
import { Spinner } from "react-bootstrap";

export const Wrapper = styled.div`
  height: calc(100vh - ${(props) => props.theme.heightNavbar} - 156px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerLoader = styled(Spinner)`
  background: ${(props) => props.theme.gradient[0]};
`;
