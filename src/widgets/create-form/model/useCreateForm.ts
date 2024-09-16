import { IProduct } from "@/entities/product/model/types";
import { categories } from "@/features/filters/constants/categories";
import { ICategory } from "@/features/filters/model/types";
import { handleProductCreate } from "@/features/product";
import { generateId } from "@/shared/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface IFormData {
  title: string;
  description: string;
}
export const useCreateForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>();
  const [selectValue, setSelectValue] = useState<string>(categories[0]);

  const onSubmitForm = async (formData: IFormData) => {
    const { title, description } = formData;
    const newProduct: IProduct = {
      id: generateId(),
      title,
      category: selectValue.toLowerCase() as ICategory,
      upvotes: 0,
      status: "suggestion",
      description,
      comments: [],
    };
    toast.info("Trying to create new product...");
    try {
      await handleProductCreate(newProduct);
      toast.success("Product created successfully");
      reset();
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    selectValue,
    setSelectValue,
    onSubmitForm,
    navigate,
  };
};
