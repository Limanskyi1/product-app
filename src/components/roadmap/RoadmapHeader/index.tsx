import { Link, useNavigate } from "react-router-dom";
import { Button, GoBackBtn } from "../../Buttons";
import classes from "./RoadmapHeader.module.scss";
import { FadeInItemTop } from "../../../libs";

export const RoadmapHeader = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };
  return (
    <FadeInItemTop>
      <div className="container">
        <div className={classes.header}>
          <div className={classes.leftSide}>
            <GoBackBtn
              className={classes.back}
              mode="dark"
              onClick={handleClickBack}
            />
            <h2>Roadmap</h2>
          </div>
          <Link to="/create-product">
            <Button className="addFeedbackBtn" text="+ Add Feedback" />
          </Link>
        </div>
      </div>
    </FadeInItemTop>
  );
};