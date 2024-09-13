import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { categories, statuses } from '../../constants';
import { useFetchProduct } from '../../hooks';
import { productApi } from '../../api/ProductApi';
import { EditForm } from './EditForm';
import { Spinner } from '../../components';
import classes from "./EditPage.module.scss";

export const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<string>(categories[0]);
  const [status, setStatus] = useState<string>(statuses[0]);
  const { product, loading } = useFetchProduct(id as string);

  useEffect(() => {
    if (product) {
      setCategory(product.category);
      setStatus(product.status);
    }
  }, [product]);

  const handleProductUpdate = async (formData: any) => {
    const updatedProduct = { ...formData, category, status };
    try {
      toast.info("Trying to edit product...");
      await productApi.updateProduct(id as string, updatedProduct);
      toast.success("Edited successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to edit product");
    }
  };

  const handleProductDelete = async () => {
    try {
      toast.info("Trying to delete product...");
      await productApi.deleteProduct(id as string);
      toast.success("Deleted successfully");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) return <Spinner className={classes.loader} />;

  return (
    <>
      <ToastContainer />
      <EditForm
        product={product}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        onSubmit={handleProductUpdate}
        onDelete={handleProductDelete}
        onGoBack={handleGoBack}
      />
    </>
  );
};
