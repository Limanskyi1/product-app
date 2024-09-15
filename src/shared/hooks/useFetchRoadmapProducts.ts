import { useEffect, useState } from "react";
import { productApi } from "../api/ProductApi";
import { IProduct } from "@/entities/product/model/types";

interface IRoadmapItem {
  status: string;
  items: IProduct[];
}

export const useFetchRoadmapProducts = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [roadmapItems, setRoadmapItems] = useState<IRoadmapItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
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
        const roadmapArray: IRoadmapItem[] = Object.keys(counts).map(status => ({
          status,
          items: counts[status]
        }));

        setRoadmapItems(roadmapArray);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return {
    loading,
    error,
    roadmapItems,
  };
};
