import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import {ICategory} from "@/features/filters/model/types";
import { IProduct } from "@/entities/product/model/types";

interface IAppContext {
  suggestions: IProduct[];
  setSuggestions: Dispatch<SetStateAction<IProduct[]>>;
  url:string;
  setUrl: Dispatch<SetStateAction<string>>;
  sortParams:string;
  setSortParams: Dispatch<SetStateAction<string>>;
  activeCategory:ICategory;
  setActiveCategory:Dispatch<SetStateAction<ICategory>>;
}

interface IAppProvider {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>({
  suggestions: [],
  setSuggestions: () => {},
  url:"",
  setUrl: () => {},
  sortParams:"",
  setSortParams: () => {},
  activeCategory:"All" as ICategory,
  setActiveCategory:() => {},
});

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [url,setUrl] = useState<string>("?status=suggestion");
  const [suggestions, setSuggestions] = useState<IProduct[]>([]);
  const [sortParams,setSortParams] = useState<string>("&sortBy=upvotes&order=desc");
  const [activeCategory,setActiveCategory] = useState<ICategory>("all" as ICategory);
  return (
    <AppContext.Provider value={{suggestions, setSuggestions,setUrl,setSortParams,url,sortParams,activeCategory,setActiveCategory}}>
      {children}
    </AppContext.Provider>
  );
};
