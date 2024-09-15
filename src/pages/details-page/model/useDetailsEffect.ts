import { IComment } from "@/entities/comment/model/comment";
import { useFetchProduct } from "@/entities/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useDetailsEffect = () => {
  const { id } = useParams();
  const { product, loading } = useFetchProduct(id as string);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    setComments(product?.comments || []);
  }, [product]);
  return {
    loading,
    product,
    id,
    comments,
    setComments,
  };
};
