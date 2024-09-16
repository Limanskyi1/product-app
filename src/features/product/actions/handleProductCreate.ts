import { IProduct } from "@/entities/product/model/types";
import { productApi } from "@/shared/api/ProductApi";

export const handleProductCreate = async (newProduct: IProduct) => {
  try {
    await productApi.createNewProduct(newProduct as IProduct);
  } catch (error) {
    console.error(error);
  }
};
