import { createContext } from "react";

export type FilterContextData = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const FilterContext = createContext<FilterContextData | undefined>(undefined);

export default FilterContext;
