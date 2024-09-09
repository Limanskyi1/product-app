import { FC } from "react";

interface ISpinner{
    className:string;
}
export const Spinner:FC<ISpinner> = ({className}) => {
  return (
    <img src="/loader.svg" alt="loader" className={className}/>
  )
}
