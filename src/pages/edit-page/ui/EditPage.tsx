import { ToastContainer } from "react-toastify";
import { EditForm } from "@/features/edit-form";
import { Spinner } from "@/shared/ui";
import { IProduct } from "@/entities/product/model/types";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "@/entities/product";
import classes from "./EditPage.module.scss";

export const EditPage = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading } = useFetchProduct(id as string);

  if (loading) {
    return <Spinner className={classes.loader} />;
  }

  return (
    <div className={classes.editPage}>
      <ToastContainer />
      <EditForm product={product as IProduct} />
    </div>
  );
};
