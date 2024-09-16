import { ICategory } from "@/features/filters/model/types";
import { StatusType } from "@/features/sort-products/model/sort";
import { productApi } from "@/shared/api/ProductApi";
 
export const handleProductUpdate = async (
  formData: any,
  category: ICategory,
  status: StatusType,
  id: string
) => {
  const updatedProduct = { ...formData, category, status };
  try {
    await productApi.updateProduct(id, updatedProduct);
  } catch (error) {
    console.error(error);
  }
};
