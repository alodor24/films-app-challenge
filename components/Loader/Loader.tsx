import * as SC from "./Loader.styles";

const Loader = () => {
  return (
    <SC.Wrapper>
      <SC.SpinnerLoader animation="grow" />
    </SC.Wrapper>
  );
};

export default Loader;
