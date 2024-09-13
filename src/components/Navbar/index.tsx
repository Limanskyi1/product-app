import { FC } from "react";
import classes from "./Navbar.module.scss";
import { Sort } from "./Sort";
import { Suggestions } from "./Suggestions";
import { Button } from "../Buttons";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../hooks";

interface INavbar {
  suggestionsCount: number;
}

export const Navbar: FC<INavbar> = ({ suggestionsCount }) => {
  const {width} = useWindowSize();
  return (
    <div className={classes.navbar}>
      {width > 768 && <Suggestions count={suggestionsCount} />}
      <Sort />
      <Link className={classes.add} to="/create-product">
        <Button className="addFeedbackBtn" text="+ Add Feedback" />
      </Link>
    </div>
  );
};
