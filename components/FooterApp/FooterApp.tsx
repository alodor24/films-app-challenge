import { Container } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import * as SC from "./FooterApp.styles";

const FooterApp = () => {
  return (
    <SC.Footer>
      <Container>
        <SC.Wrapper>
          <Image src={Logo} width={50} alt="Logo App" />
          <SC.Text>
            Created by José Méndez |{" "}
            <SC.ExternalLink
              href="https://github.com/alodor24/movie-app-challenge"
              target="_blank"
            >
              Github Repository
            </SC.ExternalLink>
          </SC.Text>
        </SC.Wrapper>
      </Container>
    </SC.Footer>
  );
};

export default FooterApp;
