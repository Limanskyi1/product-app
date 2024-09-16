import { FadeInItemBottom } from "@/shared/libs/createMotionWrapper";
import { GoBackBtn } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CreateForm } from "@/widgets/create-form";
import classes from "./CreatePage.module.scss";

export const CreatePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <ToastContainer />
      <div className={classes.createPage}>
        <GoBackBtn
          onClick={() => navigate(-1)}
          className={`backBtn ${classes.back}`}
          mode="light"
        />
        <FadeInItemBottom>
          <CreateForm />
        </FadeInItemBottom>
      </div>
    </>
  );
};
