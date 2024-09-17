import { useEffect, useState, useCallback } from "react";
import { IProduct } from "@/entities/product/model/types";
import { productApi } from "@/shared/api/ProductApi";

interface IRoadmapItem {
  status: string;
  items: IProduct[];
}

export const useFetchRoadmapProducts = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [roadmapItems, setRoadmapItems] = useState<IRoadmapItem[]>([]);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const products = await productApi.getAllProducts();
      const filteredProducts = products.filter((product) => product.status !== "suggestion");
      const counts: { [key: string]: IProduct[] } = {};

      filteredProducts.forEach((product) => {
        if (counts[product.status]) {
          counts[product.status].push(product);
        } else {
          counts[product.status] = [product];
        }
      });

      const roadmapArray: IRoadmapItem[] = Object.keys(counts).map((status) => ({
        status,
        items: counts[status],
      }));

      setRoadmapItems(roadmapArray);
      setError(false); 
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  return {
    loading,
    error,
    roadmapItems: [...roadmapItems].sort((a, b) => a.status.localeCompare(b.status)),
    revalidate: fetchProducts,
  };
};
