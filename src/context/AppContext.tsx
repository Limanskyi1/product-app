import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { IProduct, ITag } from "../types";
import { tags } from "../constants";

interface IAppContext {
  suggestions: IProduct[];
  setSuggestions: Dispatch<SetStateAction<IProduct[]>>;
  url:string;
  setUrl: Dispatch<SetStateAction<string>>;
  sortParams:string;
  setSortParams: Dispatch<SetStateAction<string>>;
  activeTag:ITag;
  setActiveTag:Dispatch<SetStateAction<ITag>>;
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
  activeTag:"All",
  setActiveTag:() => {},
});

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [url,setUrl] = useState<string>("?status=suggestion");
  const [suggestions, setSuggestions] = useState<IProduct[]>([]);
  const [sortParams,setSortParams] = useState<string>("&sortBy=upvotes&order=desc");
  const [activeTag,setActiveTag] = useState<ITag>(tags[0]);
  return (
    <AppContext.Provider value={{suggestions, setSuggestions,setUrl,setSortParams,url,sortParams,activeTag,setActiveTag}}>
      {children}
    </AppContext.Provider>
  );
};
