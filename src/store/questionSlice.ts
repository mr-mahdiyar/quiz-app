import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type QuestionType } from "../components/Question";
import { addQuestion } from "../services/questionService";
import { STATUS } from "../utils/status";
import { type PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  questions: QuestionType[];
  status: string;
};

const initialState: InitialState = {
  questions: [],
  status: STATUS.IDLE,
};
export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      addQuestionToServer.fulfilled,
      (state, action: PayloadAction<QuestionType>) => {
        state.status = STATUS.FULFILLED;
        state.questions.push(action.payload);
      }
    );
  },
});

export const addQuestionToServer = createAsyncThunk(
  "addQuestionToServer",
  async (question: QuestionType) => {
    const response = await addQuestion(question);
    return response.data;
  }
);

export default questionSlice;