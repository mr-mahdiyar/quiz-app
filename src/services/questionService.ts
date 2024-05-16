import axios from "axios";

import { makeSubUrl } from "./serverUrl";
import { type QuestionType } from "../components/Question";

const questions = "questions"

export const addQuestion = (question: QuestionType) => {
  return axios.post(makeSubUrl(`${questions}`), question);
};

export const readAllQuestions = () => {
    return axios.get(makeSubUrl(questions))
}
