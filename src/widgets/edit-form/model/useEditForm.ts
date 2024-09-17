import { IProduct } from "@/entities/product/model/types";
import { categories } from "@/features/filters/constants/categories";
import { ICategory } from "@/features/filters/model/types";
import { handleProductDelete, handleProductUpdate } from "@/features/product";
import { StatusType } from "@/features/sort-products/model/sort";
import { statuses } from "@/shared/constants";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
    toast.info("Trying to delete product...");
    await handleProductDelete(product.id as string);
    toast.success("Deleted successfully");
    setTimeout(() => navigate("/"), 1000);
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  const onSubmitForm = async (formData: Partial<IProduct>) => {
    toast.info("Trying to update product...");
    try {
      await handleProductUpdate(formData, category, status, product.id as string);
      toast.success("Product updated successfully");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
    
  };

  return {
    handleClickBack,
    onClickDelete,
    setCategory,
    setStatus,
    onSubmitForm,
    category,
    status,
  };
};
