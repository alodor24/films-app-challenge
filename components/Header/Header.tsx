import { Container } from "react-bootstrap";
import * as SC from "./Header.styles";
import { BASE_URL_IMAGE } from "@/helpers/contants";
import { Movie, Serie } from "@/helpers/types";

type Props = {
  data: Movie | Serie;
};

const Header: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <SC.Wrapper>
        <SC.Poster
          className="img-fluid wow zoomIn"
          src={BASE_URL_IMAGE + data.poster_path}
          alt={data.title || data.name}
          width={360}
          height={540}
        />
        <div className="wow zoomIn">
          <SC.Title>{data.title || data.name}</SC.Title>
          <SC.HeaderButton withBackground={true}>Play now</SC.HeaderButton>
          <SC.HeaderButton disabled={false}>Add to favorite</SC.HeaderButton>
        </div>
      </SC.Wrapper>
    </Container>
  );
};

export default Header;
