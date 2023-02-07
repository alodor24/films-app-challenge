import styled from "styled-components";
import Image from "next/image";
import { Button } from "react-bootstrap";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2rem;
  grid-template-columns: 0.8fr 3fr;
  align-items: center;

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

export const Poster = styled(Image)`
  filter: drop-shadow(0 0.5rem 0.8rem rgba(255, 255, 255, 0.5));
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white[0]};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: ${(props) => props.theme.fontWeight[6]};
  font-size: 3.5rem;
  text-shadow: ${(props) => props.theme.shadow[4]};

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const HeaderButton = styled(Button)<{ withBackground?: boolean }>`
  background: ${(props) =>
    props.withBackground ? props.theme.gradient[0] : "transparent"};
  border: solid 2px ${(props) => props.theme.colors.white[0]};
  margin-right: 0.5rem;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fontWeight[4]};
  transition: ${(props) => props.theme.transition};

  :hover {
    border: solid 2px ${(props) => props.theme.colors.white[0]};
    transform: scale(0.9);
    background-color: ${(props) => props.theme.colors.grey[3]};
  }

  :disabled {
    background-color: ${(props) => props.theme.colors.grey[3]};
    border-color: ${(props) => props.theme.colors.white[0]};
    cursor: not-allowed;
  }

  @media (max-width: 576px) {
    margin-bottom: 0.5rem;
    font-size: 0.6rem;
  }
`;
