import { Dispatch, FC } from "react";
import UiButton from "../../../ui/ui-button/ui-button";
import styles from "./error-message.module.css";

interface ErrorMessageProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ setIsOpen }) => {
  return (
    <div className={styles.content}>
      <h3>{`Форма успешно отправлена`}</h3>
      <img src="error-icon.png" alt="sucsess" />
      <UiButton
        onClick={() => setIsOpen(false)}
        classes={styles.close}
        theme="dark"
        text="Закрыть"
      />
    </div>
  );
};

export default ErrorMessage;
