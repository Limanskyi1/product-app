import { toast } from 'react-toastify';
import { productApi } from '../api/ProductApi'; 

interface SubmitProductUpdateParams {
  formData: any;
  category: string;
  status: string;
  id: string;
}

export const submitProductUpdate = async ({
  formData,
  category,
  status,
  id,
}: SubmitProductUpdateParams) => {
  const updatedProduct = {
    ...formData,
    category,
    status,
  };

  try {
    toast.info("Try to edit product...");
    await productApi.updateProduct(id, updatedProduct);
    toast.success("Edited successfully");
  } catch (error) {
    console.error(error);
    toast.error("Failed to edit product");
  }
};
