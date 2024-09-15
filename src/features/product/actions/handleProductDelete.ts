import { productApi } from "@/shared/api/ProductApi";
import { toast } from "react-toastify";

export const handleProductDelete = async (id:string) => {
  try {
    toast.info("Trying to delete product...");
    await productApi.deleteProduct(id);
    toast.success("Deleted successfully");
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  }
};
