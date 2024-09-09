import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetchProduct } from "../../hooks";
import {
  AddComment,
  Button,
  CommentsList,
  GoBackBtn,
  Product,
  Spinner,
} from "../../components";
import classes from "./DetailsPage.module.scss";
import data from "../../../data.json";
import { useEffect, useState } from "react";
import { generateId } from "../../utils";
import { productApi } from "../../api/ProductApi";
import { IComment } from "../../types";
import { ToastContainer, toast } from "react-toastify";

export const DetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentUser } = data;
  const { product, loading } = useFetchProduct(id as string);
  const [comments, setComments] = useState<IComment[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  useEffect(() => {
    setComments(product?.comments || []);
  }, [product]);

  if (loading) return <Spinner className={classes.loader} />;

  const handlePostComment = async () => {
    if (!commentText.trim()) {
      toast.error("Comment cannot be empty!");
      return;
    }

    const newComment: IComment = {
      id: generateId(),
      content: commentText,
      user: { ...currentUser },
    };

    const updatedComments = [newComment, ...comments];
    toast.info("Sending your comment...");

    try {
      await productApi.sendComment(updatedComments, id as string);
      setComments(updatedComments);
      toast.success("Comment sent successfully!");
    } catch {
      toast.error("Failed to send comment. Please try again.");
    } finally {
      setCommentText("");
    }
  };

  const handleGoBack = () => navigate(-1);

  const { title, upvotes, description, category } = product || {};

  return (
    <>
    <ToastContainer />
    <div className={classes.detailsPage}>
      <div className={classes.buttons}>
        <GoBackBtn onClick={handleGoBack} className={`backBtn ${classes.back}`} mode="light"/>
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
        onClickPost={handlePostComment}
        commentText={commentText}
        setCommentText={setCommentText}
      />
    </div>
    </>
   
  );
};
