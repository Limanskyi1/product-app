import { productApi } from "@/shared/api/ProductApi";
import { useAppContext } from "@/shared/hooks";
import { useEffect, useState } from "react";


export const useFetchProducts = () => {
  const { suggestions,url,sortParams,setSuggestions } = useAppContext();
  const [loading,setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const suggestions = await productApi.getProductsByParams(url + sortParams);
        setSuggestions(suggestions);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setSuggestions([]);
        setLoading(false);
      }
    }
    fetchProducts();
  },[url,sortParams]);

  return {
    loading,
    setLoading,
    suggestions,
  }
}
