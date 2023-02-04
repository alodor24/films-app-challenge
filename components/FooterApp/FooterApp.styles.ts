import styled from "styled-components";

export const Footer = styled.footer`
  padding: 2.5rem 0;
  background-color: green;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ExternalLink = styled.a`
  color: #fff;
  transition: all ease-in-out 0.3s;

  :hover {
    color: red;
  }
`;
