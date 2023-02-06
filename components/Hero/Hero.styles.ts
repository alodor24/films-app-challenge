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

export const FilterHero = styled.div`
  height: 20vh;
  position: absolute;
  bottom: -1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey[3]};
  box-shadow: ${(props) => props.theme.shadow[1]};
`;
