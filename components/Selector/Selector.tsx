import * as SC from "./Selector.styles";
import { Container, Dropdown } from "react-bootstrap";
import useFilterContext from "@/context/FilterContext/useFilterContext";
import { CategorieMode } from "@/helpers/contants";

const Selector = () => {
  const { setFilter } = useFilterContext();

  const handleFilter = (value: string) => {
    setFilter(value);
  };

  return (
    <Container>
      <SC.ContainerDropdown>
        <Dropdown>
          <SC.DropdownButton>Categories</SC.DropdownButton>
          <SC.DropdownSelect>
            <Dropdown.Item onClick={() => handleFilter(CategorieMode.ALL)}>
              All
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter(CategorieMode.MOVIE)}>
              Movies
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter(CategorieMode.TV)}>
              Series
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter(CategorieMode.FAVORITE)}>
              Favorites
            </Dropdown.Item>
          </SC.DropdownSelect>
        </Dropdown>
      </SC.ContainerDropdown>
    </Container>
  );
};

export default Selector;
