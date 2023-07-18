import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { formReducer } from "./slices/form-slice";

const rootReducer = combineReducers({ form: formReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
