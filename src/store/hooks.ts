// import { useDispatch } from "react-redux";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

import { type AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;

export const useQuestionDispatch: DispatchFunction = useDispatch;
export const useQuestionSelector:TypedUseSelectorHook<RootState> = useSelector;