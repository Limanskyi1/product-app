import { productApi } from "@/shared/api/ProductApi";
import { useAppContext } from "@/shared/hooks";
import { useEffect, useState } from "react";
import { IProduct } from "./types";
import { ICategory } from "@/features/filters/model/types";
import queryString from "query-string";


const createParams = (category:string,sortParams:string) => {
  let params = "";
  if(category !== "all"){
    params += `&category=${category}`;
  }
  return `${params}&${sortParams}`;
}


export const useFetchProducts = () => {
  const [suggestions, setSuggestions] = useState<IProduct[]>([]);
  const [loading,setLoading] = useState<boolean>(true);
  const { sortParams ,activeCategory} = useAppContext();
  

  useEffect(() => {

    const parsedParams = queryString.parse(location.search);
    const { category } = parsedParams;

    const fetchProducts = async () => {
      const currentCategory = category ? (category as ICategory) : activeCategory;
      try {
        setLoading(true);
        const suggestions = await productApi.getSuggestions(createParams(currentCategory!,sortParams));
        setSuggestions(suggestions);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setSuggestions([]);
        setLoading(false);
      }
    }
    fetchProducts();
  },[sortParams,activeCategory]);

  return {
    loading,
    setLoading,
    suggestions,
  }
}
