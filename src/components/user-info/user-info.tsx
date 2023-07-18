import CustomLink from "../../ui/ui-link/ui-link";
import styles from "./user-info.module.css";

const UserInfo = () => {
  return (
    <div className={styles.user}>
      <img className={styles.avatar} src="avatar.jpg" alt="avatar" />
      <div className={styles.info}>
        <h3>{`Егор Дмитриев`}</h3>
        <div className={styles.links}>
          <CustomLink text="Telegram" />
          <CustomLink text="GitHub" />
          <CustomLink text="Resume" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
