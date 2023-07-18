import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FirstForm } from "../../pages/form/steps/first/first-step";
import { SecondForm } from "../../pages/form/steps/second/second-step";
import { ThirdForm } from "../../pages/form/steps/third/third-step";

interface responseAfterSend {
  isLoading: boolean;
  isSucsess: boolean;
}

interface IinintialState {
  firstStep: FirstForm;
  secondStep: SecondForm;
  thirdStep: ThirdForm;
  responseAfterSend: responseAfterSend;
}

const initialState: IinintialState = {
  firstStep: { name: "", nickname: "", surname: "", sex: "" },
  secondStep: {
    advantages: [
      { testId: "field-advantages-1", value: "" },
      { testId: "field-advantages-2", value: "" },
      { testId: "field-advantages-3", value: "" },
    ],
    checkboxGroup: [],
    radioGroup: 0,
  },
  thirdStep: { about: "" },
  responseAfterSend: {
    isLoading: false,
    isSucsess: false,
  },
};

type SendData = FirstForm & SecondForm & ThirdForm;

export const sendForm = createAsyncThunk(
  "send/form",
  async (data: SendData, thunkApi) => {
    try {
      const response = await fetch(
        "https://api.sbercloud.ru/content/v1/bootcamp/frontend",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (response.ok) return response.json();

      throw Error();
    } catch {
      return thunkApi.rejectWithValue({});
    }
  }
);

const formSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    updateFirstStep: (state, action) => {
      state.firstStep = action.payload;
    },
    updateSecondStep: (state, action) => {
      state.secondStep = action.payload;
    },
    updateThirdStep: (state, action) => {
      state.thirdStep = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendForm.pending, ({ responseAfterSend }) => {
        responseAfterSend.isLoading = true;
      })
      .addCase(sendForm.fulfilled, ({ responseAfterSend }) => {
        responseAfterSend.isLoading = false;
        responseAfterSend.isSucsess = true;
      })
      .addCase(sendForm.rejected, ({ responseAfterSend }) => {
        responseAfterSend.isLoading = false;
        responseAfterSend.isSucsess = false;
      });
  },
});

export const formReducer = formSlice.reducer;
export const { updateFirstStep, updateSecondStep, updateThirdStep } =
  formSlice.actions;
export default formSlice;
