import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import {ICategory} from "@/features/filters/model/types";

interface IAppContext {
  sortParams:string;
  setSortParams: Dispatch<SetStateAction<string>>;
  activeCategory:ICategory;
  setActiveCategory:Dispatch<SetStateAction<ICategory>>;
}

interface IAppProvider {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>({
  sortParams:"",
  setSortParams: () => {},
  activeCategory:"all" as ICategory,
  setActiveCategory:() => {},
});

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [sortParams,setSortParams] = useState<string>("sortBy=upvotes&order=desc");
  const [activeCategory,setActiveCategory] = useState<ICategory>("all" as ICategory);

  return (
    <AppContext.Provider value={{setSortParams,sortParams,activeCategory,setActiveCategory}}>
      {children}
    </AppContext.Provider>
  );
};
