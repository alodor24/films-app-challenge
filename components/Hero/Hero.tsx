import { Container } from "react-bootstrap";
import { Parallax } from "react-parallax";
import * as SC from "./Hero.styles";

type Props = {
  children?: React.ReactNode;
  bgImage: string;
};

const Hero: React.FC<Props> = ({ children, bgImage }) => {
  return (
    <Parallax bgImage={bgImage} bgImageAlt="Parallax" strength={200}>
      <SC.Wrapper>
        <Container>{children}</Container>
        <SC.FilterHero />
      </SC.Wrapper>
    </Parallax>
  );
};

export default Hero;
