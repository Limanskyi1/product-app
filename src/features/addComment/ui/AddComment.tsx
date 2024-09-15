import { Button } from "@/shared/ui/Button";
import classes from "./AddComment.module.scss";
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { IComment } from "@/entities/comment/model/comment";
import { useAddComment } from "../model/useAddComment";

interface IAddComment {
  comments:IComment[],
  setComments: Dispatch<SetStateAction<IComment[]>>;
  productId:string;
}

export const AddComment: FC<IAddComment> = ({
  comments,
  setComments,
  productId,
}) => {
  const [commentText, setCommentText] = useState<string>("");

  const {handlePostComment} = useAddComment(commentText,comments,productId,setComments,setCommentText);

  return (
    <div className={classes.wrap}>
      <h4 className={classes.title}>Add Comment</h4>
      <textarea
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setCommentText(e.target.value)
        }
        value={commentText}
        className={classes.textarea}
        placeholder="Type your comment here"
      ></textarea>
      <div className={classes.bottom}>
        <p className={classes.text}>250 Characters left</p>
        <Button
          onClick={handlePostComment}
          text="Post Comment"
          className="addFeedbackBtn"
        />
      </div>
    </div>
  );
};
