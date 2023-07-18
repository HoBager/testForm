import { forwardRef } from "react";
import styles from "./radio.module.css";
import { UseFormRegister } from "react-hook-form";
import { SecondForm } from "../../pages/form/steps/second/second-step";

interface RadioProps extends React.HTMLProps<HTMLInputElement> {
  radioValue: number;
  name: string;
  register: UseFormRegister<SecondForm>;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ checked, radioValue, name, register }, _ref) => {
    return (
      <label className={styles.customRadio}>
        <input
          {...register(name)}
          checked={checked}
          value={radioValue}
          name={name}
          type="radio"
        />
        <span>{radioValue}</span>
      </label>
    );
  }
);

export default Radio;
