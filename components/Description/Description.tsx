import { Movie, Serie } from "@/helpers/types";
import Image from "next/image";
import Average from "../../public/images/average-icon.svg";
import * as SC from "./Description.styles";

type Props = {
  data: Movie | Serie;
};

const Description: React.FC<Props> = ({ data }) => {
  return (
    <SC.Wrapper>
      <SC.Section>
        <div className="wow zoomIn">
          <SC.Label>Genre:</SC.Label>
          <SC.Genres>
            {data.genres.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </SC.Genres>

          <SC.Label>Score:</SC.Label>
          <p>
            <SC.Average>
              <Image src={Average} width={12} alt="Average Icon" />
              {data.vote_average}
            </SC.Average>
          </p>

          <SC.Label>Popularity:</SC.Label>
          <p>{data.popularity}</p>
        </div>
        <div className="wow zoomIn">
          <SC.Label>Description:</SC.Label>
          <p>{data.overview}</p>
        </div>
      </SC.Section>
    </SC.Wrapper>
  );
};

export default Description;
