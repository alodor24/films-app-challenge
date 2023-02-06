import { Movies } from "@/helpers/types";
import { Row } from "react-bootstrap";
import Image from "next/image";
import Average from "../../public/images/average-icon.svg";
import Play from "../../public/images/play-icon.svg";
import * as SC from "./List.styles";
import Link from "next/link";

type Props = {
  data: Movies[];
};

const List: React.FC<Props> = ({ data }) => {
  return (
    <SC.Wrapper>
      <Row>
        {data.map((item) => (
          <SC.ContainerCard key={item.id} md={6} lg={4}>
            <Link href={`/deail/${item.id}`}>
              <SC.Card>
                <SC.CardImage>
                  <Image
                    className="image-item"
                    src={
                      "https://image.tmdb.org/t/p/original" + item.backdrop_path
                    }
                    alt={item.title}
                    width={500}
                    height={180}
                  />
                  <SC.Filter className="card-filter">
                    <Image src={Play} alt="Play Icon" />
                  </SC.Filter>
                </SC.CardImage>
                <div>
                  <SC.Caption>
                    <span>
                      <Image src={Average} width={12} alt="Average Icon" />
                      {item.vote_average}
                    </span>
                    <span>{item.release_date.slice(0, 4)}</span>
                  </SC.Caption>
                  <SC.Title>{item.title}</SC.Title>
                </div>
              </SC.Card>
            </Link>
          </SC.ContainerCard>
        ))}
      </Row>
    </SC.Wrapper>
  );
};

export default List;
