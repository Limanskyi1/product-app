import { FC, ReactNode } from "react";
import '../../styles/index.scss';
import classes from './HomeLayout.module.scss';

interface IHomeLayout {
    children: ReactNode;
}

export const HomeLayout:FC<IHomeLayout> = ({children}) => {
  return (
    <div className="container">
        <div className={classes.homeLayout}>{children}</div>
    </div>
  )
}
