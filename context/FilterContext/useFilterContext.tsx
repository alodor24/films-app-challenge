import { useContext } from "react";
import FilterContext, { FilterContextData } from ".";

const useFilterContext = (): FilterContextData => {
  const filterContext = useContext(FilterContext);

  if (!filterContext) {
    throw new Error(
      "useFilterContext must be used within the FilterContext.Provider"
    );
  }

  return filterContext;
};

export default useFilterContext;
