import { IProduct } from "@/entities/product/model/types";
import { categories } from "@/features/filters/constants/categories";
import { statuses } from "@/shared/constants";
import {
  GoBackBtn,
  Button,
  FormInput,
  FormSelect,
  FormTextarea,
} from "@/shared/ui";
import { useForm } from "react-hook-form";
import { useEditForm } from "../model/useEditForm";
import classes from "./EditForm.module.scss";

interface EditFormProps {
  product: IProduct;
}

export const EditForm = ({ product }: EditFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: product?.title,
      category: product?.category,
      description: product?.description,
    },
  });

  const {
    onClickDelete,
    handleClickBack,
    category,
    status,
    setCategory,
    setStatus,
    onSubmitForm,
  } = useEditForm(product);

  return (
    <>
      <GoBackBtn
        onClick={handleClickBack}
        className={`backBtn ${classes.back}`}
        mode="light"
      />
      <div className={classes.wrapper}>
        <img className={classes.ball} src="/edit-icon.svg" alt="" />
        <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)}>
          <h2 className={classes.mainTitle}>Editing ‘{product?.title}’</h2>
          <div className={classes.field}>
            <p>Feedback Title</p>
            <p>Update the feedback title</p>
            <FormInput
              {...register("title", { required: "Can’t be empty" })}
              error={errors.title}
            />
          </div>
          <div className={classes.field}>
            <p>Category</p>
            <p>Update the category for your feedback</p>
            <FormSelect
              value={category}
              options={categories}
              setValue={setCategory}
            />
          </div>
          <div className={classes.field}>
            <p>Update Status</p>
            <p>Change feedback state</p>
            <FormSelect
              value={status}
              options={statuses}
              setValue={setStatus}
            />
          </div>
          <div className={classes.field}>
            <p>Feedback Detail</p>
            <p>
              Update any specific comments on what should be improved, added,
              etc.
            </p>
            <FormTextarea
              {...register("description", { required: "Can’t be empty" })}
              error={errors.description}
            />
          </div>
          <div className={classes.btns}>
            <Button
              onClick={onClickDelete}
              text="Delete"
              className="deleteBtn"
            />
            <Button
              onClick={handleClickBack}
              text="Cancel"
              className="cancelBtn"
            />
            <button className="addFeedbackBtn">Update Feedback</button>
          </div>
        </form>
      </div>
    </>
  );
};
