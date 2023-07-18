import { FC } from "react";
import styles from "./ui-button.module.css";
import cn from "classnames";

interface UiButtonProps {
  onClick: (...args: unknown[]) => void;
  disabled: boolean;
  theme: string;
  text: string;
  id: string;
  form: string;
  classes?: string | string[];
  type: "button" | "submit" | "reset" | undefined;
}

const UiButton: FC<Partial<UiButtonProps>> = ({
  type,
  text = "",
  disabled = false,
  theme = "light",
  id,
  form,
  onClick,
  classes,
}) => {
  return (
    <button
      type={type}
      form={form}
      id={id}
      disabled={disabled}
      className={cn(styles.button, styles[theme], classes)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default UiButton;
