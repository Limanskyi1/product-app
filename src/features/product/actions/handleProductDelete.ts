import { productApi } from "@/shared/api/ProductApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const handleProductDelete = async (id:string) => {
  const navigate = useNavigate();
  try {
    toast.info("Trying to delete product...");
    await productApi.deleteProduct(id);
    toast.success("Deleted successfully");
    setTimeout(() => navigate("/"), 1000);
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  }
};
