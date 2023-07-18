import { Dispatch, FC } from "react";
import styles from "./status-modal.module.css";
import SuccsessMessage from "./sucsess/sucsess";
import ErrorMessage from "./error/error-message";

interface ModalSucsessProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  isSucsess: boolean;
}

const StatusModal: FC<ModalSucsessProps> = ({ isSucsess, setIsOpen }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__body}>
        {isSucsess ? (
          <SuccsessMessage />
        ) : (
          <ErrorMessage setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default StatusModal;
