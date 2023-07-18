import { forwardRef } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import Select, { StylesConfig } from "react-select";
import { FirstForm } from "../../pages/form/steps/first/first-step";
import styles from "./select-sex.module.css";

enum Sex {
  man = "man",
  women = "women",
}

interface Options {
  value: string;
  label: string;
}

const options: Options[] = [
  { value: Sex.man, label: Sex.man },
  { value: Sex.women, label: Sex.women },
];

const style: StylesConfig<Options, true> = {
  control: (styles) => ({ ...styles, height: "44px" }),
  menu: (styles) => ({ ...styles, marginTop: "0" }),
};

interface SexSelectProps {
  control: Control<FirstForm, any>;
  error: FieldError | undefined;
}

const SexSelect = forwardRef<any, SexSelectProps>(
  ({ control, error }, _ref) => {
    return (
      <div className={styles.select}>
        <Controller
          name="sex"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <Select
              ref={ref}
              id="field-sex"
              components={{ IndicatorSeparator: () => null }}
              styles={style}
              options={options}
              value={options.find((c) => {
                return c.value === value;
              })}
              onChange={(newValue) =>
                onChange((newValue as unknown as Options).value)
              }
              placeholder={<div>{`Не выбрано`}</div>}
            />
          )}
        />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  }
);
export default SexSelect;
