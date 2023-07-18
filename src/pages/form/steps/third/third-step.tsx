import React, { Dispatch, FC, useState } from "react";
import styles from "./third-step.module.css";
import UiButton from "../../../../ui/ui-button/ui-button";
import Textarea from "../../../../components/about-textarea/textarea";
import UiLabel from "../../../../ui/ui-label/ui-label";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RootState, useAppDispatch } from "../../../../store";
import { useSelector } from "react-redux";
import StatusModal from "../../../../components/modal/status-modal";
import { createPortal } from "react-dom";
import { sendForm, updateFirstStep } from "../../../../store/slices/form-slice";

export interface ThirdForm {
  about: string;
}

interface ThirdStepProps {
  setTabIndex: Dispatch<React.SetStateAction<number>>;
}

const schema = yup.object().shape({
  about: yup
    .string()
    .transform((value) => {
      return value.replace(/ /g, "");
    })
    .max(200, "превышено допустимое количество символов 200")
    .required("Это поле обязательно"),
});

const ThirdStep: FC<ThirdStepProps> = ({ setTabIndex }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { firstStep, secondStep, thirdStep, responseAfterSend } = useSelector(
    (state: RootState) => state.form
  );
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ThirdForm>({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: thirdStep,
  });

  const onSubmit = (data: ThirdForm) => {
    updateFirstStep(data);
    dispatch(sendForm({ ...firstStep, ...secondStep, ...thirdStep }));
    setIsOpen(true);
  };

  return (
    <>
      <form
        id="thirdStep"
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <UiLabel text="About">
          <Textarea error={errors.about?.message} control={control} />
        </UiLabel>

        <div className={styles.nav}>
          <UiButton
            type="button"
            onClick={() => setTabIndex((prev) => prev - 1)}
            id="button-back"
            text="Назад"
          />
          <UiButton
            id="button-next"
            form={"thirdStep"}
            text="Отправить"
            theme="dark"
          />
        </div>
      </form>
      {isOpen && !responseAfterSend.isLoading
        ? createPortal(
            <StatusModal
              isSucsess={responseAfterSend.isSucsess}
              setIsOpen={setIsOpen}
            />,
            document.body
          )
        : null}
    </>
  );
};

export default ThirdStep;
