import { FC } from "react";

interface IButton {
  className: string;
  text: string;
  onClick?: () => void;
}
interface IGoBackBtn {
  className: string;
  onClick?: () => void;
  mode: "light" | "dark";
}

export const Button: FC<IButton> = ({ className, text, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    {text}
  </button>
);

export const GoBackBtn: FC<IGoBackBtn> = ({ className, onClick, mode }) => {
  if (mode === "light") {
    return (
      <button onClick={onClick} className={className}>
        <img src="/arrow-left-dark.svg" alt="icon arrow" />
        <span>Go Back</span>
      </button>
    );
  }
  return (
    <button onClick={onClick} className={className}>
      <img src="/arrow-left.svg" alt="icon arrow" />
      <span>Go Back</span>
    </button>
  );
};
