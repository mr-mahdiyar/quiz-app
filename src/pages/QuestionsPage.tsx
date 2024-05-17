import Question from "../components/Question";
import OptionsList from "../components/OptionsList";
import { type QuestionType } from "../components/Question";
import { useEffect, useState } from "react";
import NextQuestion from "../components/NextQuestion";
import ShowScore from "../components/ShowScore";
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
      {currentQuestionNumber < 5 ? (
        <>
        <title>کوییز اپ - سوال {currentQuestionNumber + 1}</title>
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
      ) : <ShowScore score={score}/>}
      <NextQuestion
        enableShowNextQuestion={enableShowNextQuestion}
        setCurrentQuestionNumber={setCurrentQuestionNumber}
        setEnableShowNextQuestion={setEnableShowNextQuestion}
        setSelectedOptionNumber={setSelectedOptionNumber}
        currentQuestionNumber={currentQuestionNumber}
      />
    </>
  );
};

export default QuestionsPage;
