import { productApi } from "@/shared/api/ProductApi";

export const handleProductDelete = async (id: string) => {
  try {
    await productApi.deleteProduct(id);
  } catch (error) {
    console.error(error);
  }
};
