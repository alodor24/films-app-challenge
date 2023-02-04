import styled from "styled-components";

export const Footer = styled.footer`
  padding: 2.5rem 0;
  background-color: ${(props) => props.theme.colors.grey[1]};
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.white[0]};
  font-size: 1rem;
  font-weight: ${(props) => props.theme.fontWeight[2]};
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
  color: ${(props) => props.theme.colors.blue[0]};
  transition: ${(props) => props.theme.transition[0]};

  :hover {
    color: ${(props) => props.theme.colors.green[0]};
  }
`;
