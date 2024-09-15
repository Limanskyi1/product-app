import { IProduct } from "@/entities/product/model/types";
import { categories } from "@/features/filters/constants/categories";
import { ICategory } from "@/features/filters/model/types";
import { handleProductUpdate, handleProductDelete } from "@/features/product";
import { StatusType } from "@/features/sortProducts/model/sort";
import { statuses } from "@/shared/constants";
import { GoBackBtn,Button, FormInput, FormSelect, FormTextarea } from "@/shared/ui";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import classes from "./EditPage.module.scss";

interface EditFormProps {
  product: IProduct;
}

export const EditForm = ({
  product,
}: EditFormProps) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: product?.title,
      category: product?.category,
      description: product?.description
    }
  });
  const [category, setCategory] = useState<ICategory>(categories[0]);
  const [status, setStatus] = useState<StatusType>(statuses[0] as StatusType);

  useEffect(() => {
    if (product) {
      setCategory(product.category);
      setStatus(product.status as StatusType);
    }
  }, [product]);

  return (
    <div className={classes.editPage}>
      <GoBackBtn onClick={()=> navigate(-1)} className={`backBtn ${classes.back}`} mode='light' />
      <div className={classes.wrapper}>
        <img className={classes.ball} src="/edit-icon.svg" alt="" />
        <form className={classes.form} onSubmit={handleSubmit((formData) => handleProductUpdate(formData, category, status, product.id as string))}>
          <h2 className={classes.mainTitle}>Editing ‘{product?.title}’</h2>
          <div className={classes.field}>
            <p>Feedback Title</p>
            <p>Update the feedback title</p>
            <FormInput
              {...register('title', { required: 'Can’t be empty' })}
              error={errors.title}
            />
          </div>
          <div className={classes.field}>
            <p>Category</p>
            <p>Update the category for your feedback</p>
            <FormSelect value={category} options={categories} setValue={setCategory} />
          </div>
          <div className={classes.field}>
            <p>Update Status</p>
            <p>Change feedback state</p>
            <FormSelect value={status} options={statuses} setValue={setStatus} />
          </div>
          <div className={classes.field}>
            <p>Feedback Detail</p>
            <p>Update any specific comments on what should be improved, added, etc.</p>
            <FormTextarea
              {...register('description', { required: 'Can’t be empty' })}
              error={errors.description}
            />
          </div>
          <div className={classes.btns}>
            <Button onClick={() => handleProductDelete(product.id as string)} text='Delete' className='deleteBtn' />
            <Button onClick={()=> navigate(-1)} text='Cancel' className='cancelBtn' />
            <button className='addFeedbackBtn'>Update Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
};
