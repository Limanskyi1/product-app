import { useForm } from 'react-hook-form';
import { FormInput, FormSelect, Button, GoBackBtn, FormTextarea } from "../../components";
import { categories, statuses } from '../../constants';
import classes from "./EditPage.module.scss";
import { Dispatch, SetStateAction } from 'react';

interface EditFormProps {
  product: any;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
  onSubmit: (formData: any) => void;
  onDelete: () => void;
  onGoBack: () => void;
}

export const EditForm = ({
  product,
  category,
  setCategory,
  status,
  setStatus,
  onSubmit,
  onDelete,
  onGoBack
}: EditFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: product?.title,
      category: product?.category,
      description: product?.description
    }
  });

  return (
    <div className={classes.editPage}>
      <GoBackBtn onClick={onGoBack} className={`backBtn ${classes.back}`} mode='light' />
      <div className={classes.wrapper}>
        <img className={classes.ball} src="/edit-icon.svg" alt="" />
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
            <Button onClick={onDelete} text='Delete' className='deleteBtn' />
            <Button onClick={onGoBack} text='Cancel' className='cancelBtn' />
            <button className='addFeedbackBtn'>Update Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
};
