import { IProduct } from "@/entities/product/model/types";
import { categories } from "@/features/filters/constants/categories";
import { ICategory } from "@/features/filters/model/types";
import { handleProductDelete } from "@/features/product";
import { StatusType } from "@/features/sort-products/model/sort";
import { statuses } from "@/shared/constants";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useEditForm = (product: IProduct) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<ICategory>(categories[0]);
  const [status, setStatus] = useState<StatusType>(statuses[0] as StatusType);

  useEffect(() => {
    if (product) {
      setCategory(product.category);
      setStatus(product.status as StatusType);
    }
  }, [product]);

  const onClickDelete = async () => {
    await handleProductDelete(product.id as string);
    setTimeout(() => navigate("/"), 1000);
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  return {
    handleClickBack,
    onClickDelete,
    setCategory,
    setStatus,
    category,
    status,
  };
};
