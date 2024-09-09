import { Dispatch, FC, SetStateAction, useState } from "react";
import { FadeInItem } from "../../../libs";
import classes from './FormSelect.module.scss';

interface IFormSelect {
  value:string;
  options: string[];
  setValue: Dispatch<SetStateAction<string>>;
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
      <p className={classes.selected}>{value}</p>
      <img style={{transform: `rotate(${isOpen ? "0deg" : "180deg"})`}} className={classes.arrow} src="/arrow-select.svg" alt="icon arrow"/>
      {isOpen && (
        <FadeInItem>
          <ul className={classes.dropdown}>
            {options.map((option) => (
              <li
                key={option}
                className={`${classes.option} ${
                  option === value ? `${classes.optionActive}` : ""
                }`}
                onClick={() => handleChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </FadeInItem>
      )}
    </div>
  );
};
