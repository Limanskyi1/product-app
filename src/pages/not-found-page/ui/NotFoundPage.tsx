import { Link } from "react-router-dom";
import classes from './NotFoundPage.module.scss';
export const NotFoundPage = () => {
  return (
    <div className={classes.notFound}>
        <span>404</span>
        <p>Page not found :(</p>
        <Link className="addFeedbackBtn" to="/">Go to homepage</Link>
    </div>
  )
}
