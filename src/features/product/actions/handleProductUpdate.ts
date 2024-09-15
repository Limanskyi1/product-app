import { ICategory } from "@/features/filters/model/types";
import { StatusType } from "@/features/sort-products/model/sort";
import { productApi } from "@/shared/api/ProductApi";
import { toast } from "react-toastify";
 
export const handleProductUpdate = async (
  formData: any,
  category: ICategory,
  status: StatusType,
  id: string
) => {
  const updatedProduct = { ...formData, category, status };
  try {
    toast.info("Trying to edit product...");
    await productApi.updateProduct(id, updatedProduct);
    toast.success("Edited successfully");
  } catch (error) {
    console.error(error);
    toast.error("Failed to edit product");
  }
};
