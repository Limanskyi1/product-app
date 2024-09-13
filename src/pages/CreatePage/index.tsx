import { useForm } from 'react-hook-form';
import { FormInput ,FormSelect,Button, GoBackBtn, FormTextarea} from "../../components";
import { categories} from '../../constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeInItemBottom } from '../../libs';
import { ToastContainer } from 'react-toastify';
import classes from "./CreatePage.module.scss";
import { useProductCreate } from '../../hooks';

export interface FormValues {
  title: string;
  category: string;
  description: string;
}

export const CreatePage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } , reset} = useForm<FormValues>();
  const [selectValue,setSelectValue] = useState<string>(categories[0]);

  const { onSubmit } = useProductCreate(selectValue,reset);

  const handleClickBack = () => {
    navigate(-1);
  }

  return (
    <>
    <ToastContainer />
    <div className={classes.createPage}>
      <GoBackBtn onClick={handleClickBack} className={`backBtn ${classes.back}`} mode='light'/>
      <FadeInItemBottom>
      <div className={classes.wrapper}>
        <img className={classes.ball} src="/plus-icon.svg" alt="" />
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={classes.mainTitle}>Create New Feedback</h2>
          <div className={classes.field}>
            <p>Feedback Title</p>
            <p>Add a short, descriptive headline</p>
            <FormInput 
              {...register('title', { required: 'Can’t be empty' })} error={errors.title}
            />
          </div>
          <div className={classes.field}>
            <p>Category</p>
            <p>Choose a category for your feedback</p>
            <FormSelect value={selectValue} options={categories} setValue={setSelectValue}/>
            {errors.category && <span>{errors.category.message}</span>}
          </div>
          <div className={classes.field}>
            <p>Feedback Detail</p>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <FormTextarea {...register('description', { required: 'Can’t be empty' })} error={errors.description}/>
          </div>
          <div className={classes.btns}>
            <Button onClick={handleClickBack} text='Cancel' className='cancelBtn'/>
            <button className='addFeedbackBtn' >Add Feedback</button>
          </div>
        </form>
      </div>
      </FadeInItemBottom>
    </div>
    </>
  );
};
