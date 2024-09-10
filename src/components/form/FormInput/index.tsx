import React, { FC, ForwardedRef } from "react";
import classes from "./FormInput.module.scss";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: { message?: string };
}

export const FormInput: FC<FormInputProps> = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <input ref={ref} className={classes.input} type="text" {...props} />
        {error && <span className={classes.error}>{error.message}</span>}
      </>
    );
  }
);

