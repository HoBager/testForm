import { forwardRef } from "react";
import styles from "./checkbox.module.css";

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  value: number;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ value, ...props }, ref) => {
    return (
      <label className={styles.customCheckbox}>
        <input ref={ref} type="checkbox" value={value} {...props} />
        <span>{value}</span>
      </label>
    );
  }
);

export default Checkbox;
