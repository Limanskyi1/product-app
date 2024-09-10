import React, { FC, ForwardedRef } from "react";
import classes from "./FormTextarea.module.scss";

interface FormInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: { message?: string };
}

export const FormTextarea: FC<FormInputProps> = React.forwardRef<HTMLTextAreaElement, FormInputProps>(
  ({ error, ...props }, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <>
        <textarea ref={ref} className={classes.textarea} {...props} />
        {error && <span className={classes.error}>{error.message}</span>}
      </>
    );
  }
);

