import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInput, FormSelect, Button, GoBackBtn, FormTextarea, Spinner } from "../../components";
import { categories, statuses } from '../../constants';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FadeInItemBottom } from '../../libs';
import { ToastContainer, toast } from 'react-toastify';
import { useFetchProduct } from '../../hooks';
import { submitProductUpdate } from '../../utils';
import { productApi } from '../../api/ProductApi';
import classes from "./EditPage.module.scss";

interface FormValues {
  title: string;
  category: string;
  description: string;
}

export const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
  const [category, setCategory] = useState<string>(categories[0]);
  const [status,setStatus] = useState<string>(statuses[0]);

  const { product, loading } = useFetchProduct(id as string);


  useEffect(() => {
    reset({
      title: product?.title,
      category: product?.category,
      description: product?.description
    });
    setCategory(product?.category as string); 
    setStatus(product?.status as string);

  }, [product]);

  if (loading) return <Spinner className={classes.loader} />;

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    await submitProductUpdate({
      formData,
      category,
      status,
      id: id as string,
    });
    reset();
    setTimeout(() => navigate("/"),1000);
  };

  const handleClickDelete = async () => {
      try {
        toast.info("Trying to deleted");
        await productApi.deleteProduct(id as string);
        toast.success("Delete successfully");
        setTimeout(() => navigate("/"),1000);
      } catch (error) {
          console.error(error);
          toast.error("Someting went wrong");
      }
  }

  const handleClickBack = () => {
    navigate(-1); 
  };

  return (
    <>
      <ToastContainer />
      <div className={classes.editPage}>
        <GoBackBtn onClick={handleClickBack} className={`backBtn ${classes.back}`} mode='light'/>
        <FadeInItemBottom>
          <div className={classes.wrapper}>
            <img className={classes.ball} src="/edit-icon.svg" alt="" />
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <h2 className={classes.mainTitle}>Editing ‘{product?.title}’</h2>
              <div className={classes.field}>
                <p>Feedback Title</p>
                <p>Update the feedback title</p>
                <FormInput 
                  {...register('title', { required: 'Can’t be empty' })} error={errors.title}
                />
              </div>
              <div className={classes.field}>
                <p>Category</p>
                <p>Update the category for your feedback</p>
                <FormSelect value={category} options={categories} setValue={setCategory}/>
                {errors.category && <span>{errors.category.message}</span>}
              </div>
              <div className={classes.field}>
                <p>Update Status</p>
                <p>Change feedback state</p>
                <FormSelect value={status} options={statuses} setValue={setStatus}/>
                {errors.category && <span>{errors.category.message}</span>}
              </div>
              <div className={classes.field}>
                <p>Feedback Detail</p>
                <p>
                  Update any specific comments on what should be improved, added,
                  etc.
                </p>
                <FormTextarea {...register('description', { required: 'Can’t be empty' })} error={errors.description}/>
              </div>
              <div className={classes.btns}>
                <Button onClick={handleClickDelete} text='Delete' className='deleteBtn'/>
                <Button onClick={handleClickBack} text='Cancel' className='cancelBtn'/>
                <button className='addFeedbackBtn'>Update Feedback</button>
              </div>
            </form>
          </div>
        </FadeInItemBottom>
      </div>
    </>
  );
};

