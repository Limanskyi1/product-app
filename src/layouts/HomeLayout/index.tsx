import { FC, ReactNode } from "react";
import '../../styles/index.scss';

interface IHomeLayout {
    children: ReactNode;
}

export const HomeLayout:FC<IHomeLayout> = ({children}) => {
  return (
    <div className="container">
        <div className="mainLayout">{children}</div>
    </div>
  )
}
