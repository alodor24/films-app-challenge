import { Container } from "react-bootstrap";
import * as SC from "./Header.styles";
import { BASE_URL_IMAGE } from "@/helpers/contants";
import { Movie, Serie } from "@/helpers/types";
import useStoreFavorite from "@/hooks/useStoreFavorite";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  data: Movie | Serie;
};

const Header: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  const { favorites, setFavorites } = useStoreFavorite();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const existInFavorite = favorites.filter(
      (item: { id: number }) => item.id === Number(id)
    );
    console.log(existInFavorite);

    if (existInFavorite.length) {
      setIsFavorite(true);
      setIsDisabled(true);
    }
  }, [favorites, id]);

  const handleSave = () => {
    if (!isFavorite) {
      setFavorites([...favorites, data]);
      setIsDisabled(true);
    }
  };

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
          <SC.HeaderButton onClick={handleSave} disabled={isDisabled}>
            {isFavorite ? "Added to favorite" : "Add to favorite"}
          </SC.HeaderButton>
        </div>
      </SC.Wrapper>
    </Container>
  );
};

export default Header;
