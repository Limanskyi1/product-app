import { FC } from "react";
import classes from "./Navbar.module.scss";
import { Sort } from "./Sort";
import { Suggestions } from "./Suggestions";
import { Button } from "../Buttons";
import { Link } from "react-router-dom";

interface INavbar {
  suggestionsCount: number;
}

export const Navbar: FC<INavbar> = ({ suggestionsCount }) => {
  return (
    <div className={classes.navbar}>
      <Suggestions count={suggestionsCount} />
      <Sort />
      <Link style={{marginLeft: "auto"}} to="/create-product">
        <Button className="addFeedbackBtn" text="+ Add Feedback" />
      </Link>
    </div>
  );
};
