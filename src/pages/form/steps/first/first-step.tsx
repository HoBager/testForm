import { useForm } from "react-hook-form";
import UiInput from "../../../../ui/ui-input/ui-input";
import UiLabel from "../../../../ui/ui-label/ui-label";
import styles from "./first-step.module.css";
import UiButton from "../../../../ui/ui-button/ui-button";
import { Link } from "react-router-dom";
import SexSelect from "../../../../components/select-sex/select-sex";
import { Dispatch, FC } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";
import { updateFirstStep } from "../../../../store/slices/form-slice";

export interface FirstForm {
  nickname: string;
  name: string;
  surname: string;
  sex: string;
}

interface FirstStepProps {
  setTabIndex: Dispatch<React.SetStateAction<number>>;
}

const schema = yup.object().shape({
  nickname: yup
    .string()
    .required("Это поле обязательно")
    .matches(/^[a-zA-Zа-яА-яЁё0-9]+$/, "Nickname не может содержать символы")
    .max(30, "Длинна должна быть не более 30 символов"),
  name: yup
    .string()
    .required("Это поле обязательно")
    .matches(/^[a-zA-Zа-яА-яЁё]+$/, "Name может состоять только из букв")
    .max(50),
  surname: yup
    .string()
    .required("Это поле обязательно")
    .matches(/^[a-zA-Zа-яА-яЁё]+$/, "Name может состоять только из букв")
    .max(50),
  sex: yup.string().required("Это поле обязательно"),
});

const FirstStep: FC<FirstStepProps> = ({ setTabIndex }) => {
  const firstStep = useSelector((state: RootState) => state.form.firstStep);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FirstForm>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: firstStep,
  });

  const onSubmit = (data: FirstForm) => {
    dispatch(updateFirstStep(data));
    Object.keys(errors).length === 0 && setTabIndex(1);
  };

  return (
    <>
      <form
        id="firstStep"
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <UiLabel error={errors.nickname} text="Nickname" id="field-nickname">
          <UiInput id="field-nickname" {...register("nickname")} />
        </UiLabel>
        <UiLabel error={errors.name} text="Name" id="field-name">
          <UiInput id="field-name" {...register("name")} />
        </UiLabel>
        <UiLabel error={errors.surname} text="Surname" id="field-surname">
          <UiInput id="field-surname" {...register("surname")} />
        </UiLabel>
        <SexSelect error={errors.sex} control={control} />
      </form>
      <div className={styles.nav}>
        <Link to={`/`}>
          <UiButton id="button-back" text="Назад" />
        </Link>
        <UiButton
          id="button-next"
          form={"firstStep"}
          text="Далее"
          theme="dark"
        />
      </div>
    </>
  );
};

export default FirstStep;
