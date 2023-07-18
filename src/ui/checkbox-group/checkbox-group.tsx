import { FC, ReactNode } from "react";
import styles from "./checkbox-group.module.css";

interface CheckboxGroupProps {
  children?: ReactNode;
  text?: string;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({ text, children }) => {
  return (
    <div className={styles.group}>
      <div className={styles.label}>{text}</div>
      {children}
    </div>
  );
};

export default CheckboxGroup;
