import Image from "next/image";
import { Container, Form } from "react-bootstrap";
import { Parallax } from "react-parallax";
import SearchIcon from "../../public/images/serach-icon.svg";
import * as SC from "./HeroHome.styles";

const Hero = "/images/hero-home.jpg";

const HeroHome = () => {
  return (
    <Parallax bgImage={Hero} bgImageAlt="Parallax" strength={200}>
      <SC.Wrapper>
        <Container>
          <SC.WrapperSearch>
            <Form>
              <SC.SerchIcon src={SearchIcon} width={30} alt="Search Icon" />
              <Form.Control
                size="lg"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </SC.WrapperSearch>
        </Container>
        <SC.FilterHero />
      </SC.Wrapper>
    </Parallax>
  );
};

export default HeroHome;
