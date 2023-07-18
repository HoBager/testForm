import { FC } from "react";
import styles from "./stepper.module.css";
import cn from "classnames";

interface StepperProps {
  length: number;
  activeIndex?: number;
}

interface StepProps {
  done?: boolean;
  index?: number;
  active?: boolean;
}

const Step: FC<StepProps> = ({ index, active = false, done = false }) => {
  return (
    <div
      className={cn(styles.step, done && styles.done, active && styles.active)}
    >
      <div className={cn(styles.item)}>
        {active && !done && <div className={styles.dot} />}
        {!active && done && <img src="done.png" alt="" />}
      </div>
      <div>{index}</div>
    </div>
  );
};

const Stepper: FC<StepperProps> = ({ length, activeIndex = 0 }) => {
  const steps = Array(length).fill(null);

  return (
    <div className={styles.stepper}>
      {steps.map((_i, index) => (
        <Step
          key={index}
          index={index + 1}
          done={activeIndex > index}
          active={activeIndex === index}
        />
      ))}
    </div>
  );
};

export default Stepper;
