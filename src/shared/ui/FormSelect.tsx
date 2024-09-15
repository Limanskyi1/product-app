import { Dispatch, FC, SetStateAction, useState } from "react";
import classes from '../styles/FormSelect.module.scss';
import { formatString } from "@/shared/utils";
import { FadeInItem } from "../libs/createMotionWrapper";
import { ICategory } from "@/features/filters/model/types";

interface IFormSelect {
  value:string | ICategory;
  options: string[];
  setValue: Dispatch<SetStateAction<any>>;
}

export const FormSelect:FC<IFormSelect> = ({value,setValue,options}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (option: any) => {
    setValue(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.selectContainer} onClick={toggleDropdown}>
      <p className={classes.selected}>{formatString(value)}</p>
      <img style={{transform: `rotate(${isOpen ? "0deg" : "180deg"})`}} className={classes.arrow} src="/arrow-select.svg" alt="icon arrow"/>
      {isOpen && (
        <FadeInItem>
          <ul className={classes.dropdown}>
            {options.map((option) => (
              <li
                key={option}
                className={`${classes.option} ${option === value ? `${classes.optionActive}` : ""}`}
                onClick={() => handleChange(option)}
              >
                {formatString(option)}
              </li>
            ))}
          </ul>
        </FadeInItem>
      )}
    </div>
  );
};