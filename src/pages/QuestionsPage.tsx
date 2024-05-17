import Question from "../components/Question";
import OptionsList from "../components/OptionsList";
import { type QuestionType } from "../components/Question";
import { useEffect, useState } from "react";
import NextQuestion from "../components/NextQuestion";

type QuestionsPageProps = {
  questions: QuestionType[];
};

const QuestionsPage = ({ questions }: QuestionsPageProps) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [randomSortOfQuestions, setRandomSortOfQuestions] = useState<
    QuestionType[]
  >([]);
  const [selectedOptionNumber, setSelectedOptionNumber] = useState<number>(0);
  const [enableShowNextQuestion, setEnableShowNextQuestion] =
    useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setRandomSortOfQuestions(() => {
      return questions.toSorted(() => Math.random() - 0.5).slice(0, 5);
    });
  }, [questions]);
  return (
    <>
      {randomSortOfQuestions ? (
        <>
          <Question
            questionText={
              randomSortOfQuestions[currentQuestionNumber]?.questionText
            }
          />
          <OptionsList
            questionOptions={
              randomSortOfQuestions[currentQuestionNumber]?.questionOptions
            }
            trueOption={
              randomSortOfQuestions[currentQuestionNumber]?.trueOption
            }
            selectedOptionNumber={selectedOptionNumber}
            setSelectedOptionNumber={setSelectedOptionNumber}
            setScore={setScore}
            setEnableShowNextQuestion={setEnableShowNextQuestion}
          />
        </>
      ) : null}
      <NextQuestion
        enableShowNextQuestion={enableShowNextQuestion}
        setCurrentQuestionNumber={setCurrentQuestionNumber}
        setEnableShowNextQuestion={setEnableShowNextQuestion}
        setSelectedOptionNumber={setSelectedOptionNumber}
      />
    </>
  );
};

export default QuestionsPage;
