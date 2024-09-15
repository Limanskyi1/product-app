import { FC } from "react";
import classes from "./CommentsList.module.scss";
import { Comment } from "./Comment";
import { IComment } from "../model/comment";

interface ICommentsList {
  comments: IComment[];
}

export const CommentsList: FC<ICommentsList> = ({ comments = [] }) => {
  return (
    <div className={classes.commentList}>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          imgUrl={comment.user?.image}
          name={comment.user?.name}
          text={comment.content}
          username={comment.user?.username}
        />
      ))}
    </div>
  );
};
