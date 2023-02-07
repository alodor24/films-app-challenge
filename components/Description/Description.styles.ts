import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3rem 0;
`;

export const Section = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 3fr;
  color: #fff;
  gap: 1rem;

  p {
    font-weight: ${(props) => props.theme.fontWeight[1]};
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  font-weight: ${(props) => props.theme.fontWeight[5]};
  margin-bottom: 0.5rem;
`;

export const Average = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Genres = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    display: inline-block;
    border: solid 0.1rem ${(props) => props.theme.colors.white[0]};
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0 0.7rem;
    border-radius: 1rem;
    font-weight: ${(props) => props.theme.fontWeight[1]};
    font-size: 0.8rem;
  }
`;
