import { Dispatch, FC } from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import styles from "./second-step.module.css";
import UiButton from "../../../../ui/ui-button/ui-button";
import UiInput from "../../../../ui/ui-input/ui-input";
import UiLabel from "../../../../ui/ui-label/ui-label";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckboxGroup from "../../../../ui/checkbox-group/checkbox-group";
import Checkbox from "../../../../ui/checkbox/checkbox";
import RadioGroup from "../../../../ui/radio-group/radio-group";
import Radio from "../../../../ui/radio/radio";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";
import { updateSecondStep } from "../../../../store/slices/form-slice";

export interface SecondForm extends FieldValues {
  advantages: Advantages[];
  radioGroup: number | undefined;
}

interface Advantages {
  testId: string;
  value: string;
}

interface SecondStepProps {
  setTabIndex: Dispatch<React.SetStateAction<number>>;
}

const schema = yup.object().shape({
  advantages: yup
    .array()
    .required()
    .of(
      yup.object().shape({
        value: yup
          .string()
          .max(10, "Длинна должна быть не более 10 символов")
          .required("Не все поля advantages заполнены"),
        testId: yup.string().required(),
      })
    ),
  radioGroup: yup.number().optional(),
});

const SecondStep: FC<SecondStepProps> = ({ setTabIndex }) => {
  const secondStep = useSelector((state: RootState) => state.form.secondStep);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SecondForm>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: secondStep,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
  });

  const onSubmit = (data: SecondForm) => {
    const s = {
      ...data,
      checkboxGroup: data?.checkboxGroup.filter(
        (item: boolean | number) => item
      ),
    };
    dispatch(updateSecondStep(s));
    setTabIndex((prev) => prev + 1);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="secondStep"
        className={styles.form}
      >
        <UiLabel text="Advantages">
          <div className={styles.advantages}>
            {fields.map((field, index) => (
              <div className={styles.advantagesItem} key={field.id}>
                <UiInput
                  {...register(`advantages.${index}.value`)}
                  placeholder="placeholder"
                  id={field.testId}
                />
                <button
                  onClick={() => remove(index)}
                  className={styles.delete}
                  type="button"
                  id={`button-remove-${index}`}
                >
                  <img src="Delete.png" alt="" />
                </button>
              </div>
            ))}
          </div>
          <UiButton
            id="button-add"
            type="button"
            onClick={() =>
              append({
                testId: `field-advantages-${fields.length + 1}`,
                value: "",
              })
            }
            text="+"
            classes={styles.add}
          />
          {errors.advantages?.length && (
            <div className={styles.error}>
              {
                errors?.advantages?.[errors.advantages?.length - 1]?.value
                  ?.message
              }
            </div>
          )}
        </UiLabel>
        <CheckboxGroup text="Checkbox group">
          <Checkbox
            {...register(`checkboxGroup`)}
            id="field-checkbox-group-option-1"
            value={1}
          />
          <Checkbox
            {...register(`checkboxGroup`)}
            id="field-checkbox-group-option-2"
            value={2}
          />
          <Checkbox
            {...register(`checkboxGroup`)}
            id="field-checkbox-group-option-3"
            value={3}
          />
        </CheckboxGroup>
        <RadioGroup text="Radio group">
          <Radio register={register} radioValue={1} name="radioGroup" />
          <Radio register={register} radioValue={2} name="radioGroup" />
          <Radio register={register} radioValue={3} name="radioGroup" />
        </RadioGroup>
      </form>
      <div className={styles.nav}>
        <UiButton
          type="button"
          onClick={() => setTabIndex((prev) => prev - 1)}
          id="button-back"
          text="Назад"
        />
        <UiButton
          id="button-next"
          form={"secondStep"}
          text="Далее"
          theme="dark"
        />
      </div>
    </>
  );
};

export default SecondStep;
