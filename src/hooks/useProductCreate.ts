import { SubmitHandler, UseFormReset } from "react-hook-form";
import { FormValues } from "../pages/CreatePage";
import { newFeedback } from "../constants";
import { generateId } from "../utils";
import { toast } from "react-toastify";
import { productApi } from "../api/ProductApi";
import { useNavigate } from "react-router-dom";

export const useProductCreate = (
  selectValue: string,
  reset: UseFormReset<FormValues>
) => {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    const newProduct = {
      ...newFeedback,
      id: generateId(),
      title: formData.title,
      description: formData.description,
      category: selectValue.toLowerCase(),
    };
    toast.info("Creating");
    console.log(newProduct);
    try {
      await productApi.createNewProduct(newProduct);
      toast.success("Created successfully!");
      reset();
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error(error);
    }
  };
  return { onSubmit };
};
