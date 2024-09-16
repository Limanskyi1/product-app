import { Button, FormInput, FormSelect, FormTextarea } from "@/shared/ui";
import { categories } from "@/features/filters/constants/categories";
import { useCreateForm } from "../model/useCreateForm";
import classes from "./CreateForm.module.scss";

export const CreateForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    selectValue,
    setSelectValue,
    onSubmitForm,
    navigate,
  } = useCreateForm();

  return (
    <div className={classes.wrapper}>
      <img className={classes.ball} src="/plus-icon.svg" alt="" />
      <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)}>
        <h2 className={classes.mainTitle}>Create New Feedback</h2>
        <div className={classes.field}>
          <p>Feedback Title</p>
          <p>Add a short, descriptive headline</p>
          <FormInput
            {...register("title", { required: "Can’t be empty" })}
            error={errors.title}
          />
        </div>
        <div className={classes.field}>
          <p>Category</p>
          <p>Choose a category for your feedback</p>
          <FormSelect
            value={selectValue}
            options={categories}
            setValue={setSelectValue}
          />
        </div>
        <div className={classes.field}>
          <p>Feedback Detail</p>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <FormTextarea
            {...register("description", { required: "Can’t be empty" })}
            error={errors.description}
          />
        </div>
        <div className={classes.btns}>
          <Button
            onClick={() => navigate(-1)}
            text="Cancel"
            className="cancelBtn"
          />
          <button className="addFeedbackBtn">Add Feedback</button>
        </div>
      </form>
    </div>
  );
};
