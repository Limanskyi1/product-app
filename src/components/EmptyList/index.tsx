import { Button } from "..";
import classes from "./EmptyList.module.scss";

export const EmptyList = () => {
  return (
    <div className={classes.emptyList}>
      <img src="/empty-icon.svg" alt="icon empty" />
      <h2>There is no feedback yet.</h2>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button className="addFeedbackBtn" text="+ Add Feedback" />
    </div>
  );
};
