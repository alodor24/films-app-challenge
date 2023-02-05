import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - ${(props) => props.theme.heightNavbar});
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

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

export const FilterHero = styled.div`
  height: 20vh;
  position: absolute;
  bottom: -1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey[3]};
  box-shadow: ${(props) => props.theme.shadow[1]};
`;
