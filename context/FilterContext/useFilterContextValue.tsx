import { CategorieMode } from "@/helpers/contants";
import { useState } from "react";
import { FilterContextData } from ".";

const useFilterContextValue = (): FilterContextData => {
  const [filter, setFilter] = useState<string>(CategorieMode.ALL);

  return {
    filter,
    setFilter,
  };
};

export default useFilterContextValue;
