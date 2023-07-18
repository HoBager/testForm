import { Link } from "react-router-dom";
import UiButton from "../../../ui/ui-button/ui-button";
import styles from "./sucsess.module.css";

const SuccsessMessage = () => {
  return (
    <div className={styles.content}>
      <h3>{`Форма успешно отправлена`}</h3>
      <img src="sucsess-icon.png" alt="sucsess" />
      <Link to={`/`}>
        <UiButton theme="dark" text="На главную" />
      </Link>
    </div>
  );
};

export default SuccsessMessage;
