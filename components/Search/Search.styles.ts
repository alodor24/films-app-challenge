import styled from "styled-components";
import Image from "next/image";

export const WrapperSearch = styled.div`
  width: 50vw;
  position: relative;
  z-index: 1;
  margin: 0 auto;

  @media (max-width: 578px) {
    width: 100%;
  }

  .form-control {
    padding-left: 2.7rem;
  }

  .form-control:focus {
    box-shadow: ${(props) => props.theme.shadow[2]};
  }
`;

export const SerchIcon = styled(Image)`
  position: absolute;
  top: 0.5rem;
  left: 0.7rem;
  opacity: 0.7;
`;
