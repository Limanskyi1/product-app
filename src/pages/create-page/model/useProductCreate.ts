import { SubmitHandler, UseFormReset } from "react-hook-form";
import { newFeedback } from "@/shared/constants";
import { toast } from "react-toastify";
import { productApi } from "@/shared/api/ProductApi";
import { useNavigate } from "react-router-dom";
import { IProduct } from "@/entities/product/model/types";
import { generateId } from "@/shared/utils";

export interface FormValues {
  title: string;
  category: string;
  description: string;
}

export const useProductCreate = (
  selectValue: string,
  reset: UseFormReset<FormValues>
) => {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    const newProduct = {
      ...newFeedback,
      id:generateId(),
      title: formData.title,
      description: formData.description,
      category: selectValue.toLowerCase(),
    };
    toast.info("Creating");
    try {
      await productApi.createNewProduct(newProduct as IProduct);
      toast.success("Created successfully!");
      reset();
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error(error);
    }
  };
  return { onSubmit };
};
