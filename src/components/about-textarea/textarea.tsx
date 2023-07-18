import { forwardRef } from "react";
import styles from "./textarea.module.css";
import { Control, Controller } from "react-hook-form";
import { ThirdForm } from "../../pages/form/steps/third/third-step";
import { useAppDispatch } from "../../store";
import { updateThirdStep } from "../../store/slices/form-slice";

interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  control: Control<ThirdForm>;
  error: string | undefined;
}

const normalize = (str = "") => {
  const count = 200 - str.replace(/\s/g, "").length;
  return count <= 0 ? ">200" : count;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ control, error }, _ref) => {
    const dispatch = useAppDispatch();
    return (
      <Controller
        name="about"
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <div className={styles.container}>
            <textarea
              onChange={(val) => {
                onChange(val);
                dispatch(updateThirdStep({ about: value }));
              }}
              ref={ref}
              value={value}
              className={styles.base}
            />

            <div className={styles.counter}>{normalize(value)}</div>
            <div className={styles.error}>{error}</div>
          </div>
        )}
      />
    );
  }
);

export default Textarea;
