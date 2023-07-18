import { FC, ReactNode } from "react";
import styles from "./radio-group.module.css";

interface RadioGroupProps {
  children?: ReactNode;
  text?: string;
}

const RadioGroup: FC<RadioGroupProps> = ({ text, children }) => {
  return (
    <div className={styles.group}>
      <div className={styles.label}>{text}</div>
      {children}
    </div>
  );
};

export default RadioGroup;
