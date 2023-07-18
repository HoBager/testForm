import UiInput from "../../ui/ui-input/ui-input";
import Layout from "../../ui/layout/layout";
import styles from "./main.module.css";
import UiLabel from "../../ui/ui-label/ui-label";
import UserInfo from "../../components/user-info/user-info";
import UiButton from "../../ui/ui-button/ui-button";
import { Link } from "react-router-dom";

function mask(str: string) {
  if (!str) return str;
  const phoneNumber = str.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `+7(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `+7(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 10)}`;
}

const MainPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <UserInfo />
        <hr className={styles.line} />
        <form className={styles.form}>
          <UiLabel id="name" text={"Номер телефона"}>
            <UiInput disabled={true} id="name" value={mask("9825827167")} />
          </UiLabel>
          <UiLabel id="Email" text="Email">
            <UiInput
              disabled={true}
              id="Email"
              value={`dmitrievhbr@gmail.com`}
            />
          </UiLabel>
          <Link className={styles.next} to={`create`}>
            <UiButton id="button-start" text="Начать" theme="dark" />
          </Link>
        </form>
      </main>
    </Layout>
  );
};

export default MainPage;
