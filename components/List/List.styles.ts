import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  padding: 1rem 0;
`;

export const TitleSection = styled.h3`
  color: ${(props) => props.theme.colors.white[0]};
  padding-left: 1.5rem;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
`;

export const ContainerCard = styled(Col)`
  padding: 1.5rem;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.grey[1]};
  border-radius: 1rem;
  padding: 1rem;
  min-height: 17rem;
  box-shadow: ${(props) => props.theme.shadow[0]};
  color: #fff;
  transition: ${(props) => props.theme.transition[0]};

  @media (min-width: 1024px) {
    :hover {
      transform: scale(1.2);

      .card-filter {
        background-color: ${(props) => props.theme.colors.grey[3]};

        img {
          background: ${(props) => props.theme.gradient[0]};
          filter: drop-shadow(${(props) => props.theme.shadow[3]});
          border-radius: 100%;
        }
      }
    }

    :hover img {
      transform: scale(1.2);
    }
  }
`;

export const CardImage = styled.div`
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 0.3rem;
  position: relative;

  img.image-item {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
    transition: ${(props) => props.theme.transition[0]};
  }
`;

export const Filter = styled.div`
  position: absolute;
  background-color: transparent;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${(props) => props.theme.transition[0]};
`;

export const Title = styled.h6`
  font-weight: ${(props) => props.theme.fontWeight[3]};
  text-transform: uppercase;
  margin-bottom: 0;

  @media (min-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    @media (min-width: 1024px) {
      font-size: 0.8rem;
    }
  }
`;
