import cn from "classnames";
import { forwardRef } from "react";
import styles from "./ui-input.module.css";

interface UiInputProps extends React.HTMLProps<HTMLInputElement> {
  classes?: string;
}

const UiInput = forwardRef<HTMLInputElement, UiInputProps>(
  ({ classes = "", ...other }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className={cn(styles.input, classes)}
        {...other}
      />
    );
  }
);

export default UiInput;
