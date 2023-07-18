import { FC, ReactNode } from "react";
import styles from "./ui-label.module.css";
import { FieldError } from "react-hook-form";

interface UiLabel {
  text: string;
  id?: string;
  children: ReactNode;
  error?: FieldError | undefined;
}

const UiLabel: FC<UiLabel> = ({ error, text, id, children }) => {
  return (
    <div className={styles.label}>
      <label htmlFor={id}>{text}</label>
      {children}
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};

export default UiLabel;
