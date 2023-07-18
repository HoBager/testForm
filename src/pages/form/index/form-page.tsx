import { useState } from "react";
import styles from "./form-page.module.css";
import Stepper from "../../../ui/stepper/stepper";
import FirstStep from "../steps/first/first-step";
import Tab from "../../../components/Tab/tab";
import SecondStep from "../steps/second/second-step";
import ThirdStep from "../steps/third/third-step";

const FormPage = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <main className={styles.main}>
      <Stepper length={3} activeIndex={tabIndex} />
      <Tab currentIndex={tabIndex} index={0}>
        <FirstStep setTabIndex={setTabIndex} />
      </Tab>
      <Tab currentIndex={tabIndex} index={1}>
        <SecondStep setTabIndex={setTabIndex} />
      </Tab>
      <Tab currentIndex={tabIndex} index={2}>
        <ThirdStep setTabIndex={setTabIndex} />
      </Tab>
    </main>
  );
};

export default FormPage;
