import Question from "../components/Question";
import OptionsList from "../components/OptionsList";
import { type QuestionType } from "../components/Question";
import { useEffect, useState } from "react";

type QuestionsPageProps = {
  questions: QuestionType[];
};

const QuestionsPage = ({ questions }: QuestionsPageProps) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [showOptionsBGStyle, setShowOptionsBGStyle] = useState<boolean>(false);
  const [randomSortOfQuestions, setRandomSortOfQuestions] = useState<
    QuestionType[]
  >([]);

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
            showOptionsBGStyle={showOptionsBGStyle}
            onSelectOption={setShowOptionsBGStyle}
          />
        </>
      ) : null}
    </>
  );
};

export default QuestionsPage;
