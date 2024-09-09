import { useEffect, useState } from "react";
import { IProduct } from "../types";
import { productApi } from "../api/ProductApi";

export const useFetchProduct = (id:string) => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const product = await productApi.getProduct(id as string);
        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setProduct(null);
        setLoading(false);
        setError(true);
      }
    };
    fetchProduct();
  }, []);

  return {
    error,
    loading,
    product,
  };
};
