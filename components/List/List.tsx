import { Movies, Series } from "@/helpers/types";
import { Dropdown, Row } from "react-bootstrap";
import Image from "next/image";
import Average from "../../public/images/average-icon.svg";
import Play from "../../public/images/play-icon.svg";
import * as SC from "./List.styles";
import Link from "next/link";
import { BASE_URL_IMAGE, CategorieMode } from "@/helpers/contants";

type Props = {
  data: Movies[] | Series[];
  mode: CategorieMode;
  title: string;
  showDropdown?: boolean;
};

const List: React.FC<Props> = ({ data, mode, title, showDropdown = true }) => {
  return (
    <SC.Wrapper>
      {showDropdown && (
        <Row>
          <SC.ContainerDropdown>
            <Dropdown>
              <SC.DropdownButton>Categories</SC.DropdownButton>
              <SC.DropdownSelect>
                <Dropdown.Item>All</Dropdown.Item>
                <Dropdown.Item>Movies</Dropdown.Item>
                <Dropdown.Item>Series</Dropdown.Item>
                <Dropdown.Item>Favorites</Dropdown.Item>
              </SC.DropdownSelect>
            </Dropdown>
          </SC.ContainerDropdown>
        </Row>
      )}

      <Row>
        <SC.TitleSection>{title}</SC.TitleSection>

        {data.map((item) => (
          <SC.ContainerCard key={item.id} md={6} lg={4} className="wow zoomIn">
            <Link href={`/${mode}/${item.id}`}>
              <SC.Card>
                <SC.CardImage>
                  <Image
                    className="image-item"
                    src={BASE_URL_IMAGE + item.backdrop_path}
                    alt={item.title || item.name}
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
                    {mode === CategorieMode.MOVIE && (
                      <span>{item.release_date.slice(0, 4)}</span>
                    )}
                    {mode === CategorieMode.TV && (
                      <span>{item.first_air_date.slice(0, 4)}</span>
                    )}
                  </SC.Caption>
                  <SC.Title>{item.title || item.name}</SC.Title>
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
