import { Form } from "react-bootstrap";
import SearchIcon from "../../public/images/serach-icon.svg";
import * as SC from "./Search.styles";

const Search = () => {
  return (
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
  );
};

export default Search;
