import { FC } from "react";
import classes from "./Comment.module.scss";
interface IComment {
  imgUrl: string;
  name: string;
  username: string;
  text: string;
}
export const Comment: FC<IComment> = ({
  imgUrl,
  name,
  username,
  text,
}) => {
  return (
    <>
      <div className={classes.comment}>
        <img className={classes.image} src={imgUrl} alt="avatar" />
        <div className={classes.content}>
          <div className={classes.top}>
            <div>
              <p className={classes.name}>{name}</p>
              <p className={classes.username}>@{username}</p>
            </div>
          </div>
          <p className={classes.text}>{text}</p>
        </div>
      </div>
    </>
  );
};
