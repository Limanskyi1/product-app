import { Sort } from "@/features/sortProducts/ui/Sort";
import { Suggestions } from "@/shared/ui/Suggestions";
import { useWindowSize } from "@/shared/hooks";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/Button";
import classes from './Navbar.module.scss';

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
