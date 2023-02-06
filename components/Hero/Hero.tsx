import { Parallax } from "react-parallax";
import * as SC from "./Hero.styles";

type Props = {
  children?: React.ReactNode;
  bgImage?: string;
};

const Hero: React.FC<Props> = ({ children, bgImage }) => {
  return (
    <>
      {bgImage === undefined ? (
        <div style={{ color: "#fff" }}>Loading...!!</div>
      ) : (
        <Parallax bgImage={bgImage} bgImageAlt="Parallax" strength={200}>
          <SC.Wrapper>
            {children}
            <SC.FilterHero />
          </SC.Wrapper>
        </Parallax>
      )}
    </>
  );
};

export default Hero;
