import { CommentsList } from "@/entities/comment";
import { Product } from "@/entities/product";
import { AddComment } from "@/features/add-comment";
import { Spinner, GoBackBtn, Button } from "@/shared/ui";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDetailsEffect } from "../model/useDetailsEffect";
import classes from "./DetailsPage.module.scss";

export const DetailsPage = () => {
  const navigate = useNavigate();

  const { loading, product, id, comments, setComments } = useDetailsEffect();

  if (loading) {
    return <Spinner className={classes.loader} />;
  }
  const handleGoBack = () => navigate(-1);

  const { title, upvotes, description, category } = product || {};

  return (
    <>
      <ToastContainer />
      <div className={classes.detailsPage}>
        <div className={classes.buttons}>
          <GoBackBtn
            onClick={handleGoBack}
            className={`backBtn ${classes.back}`}
            mode="light"
          />
          <Link to={`/edit-product/${id}`}>
            <Button text="Edit Feedback" className="editButton" />
          </Link>
        </div>
        <Product
          title={title!}
          upvotes={upvotes!}
          description={description!}
          category={category as string}
          comments={comments}
          id={id as string}
        />
        {comments.length > 0 && <CommentsList comments={comments} />}
        <AddComment
          comments={comments}
          setComments={setComments}
          productId={id as string}
        />
      </div>
    </>
  );
};
