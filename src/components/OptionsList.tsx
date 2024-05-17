import Option, { type OptionProps } from "./Option";
import Grid from "@mui/material/Unstable_Grid2";
import { type QuestionType } from "./Question";
import { type FC, Dispatch, SetStateAction, useState, useEffect } from "react";

const containerStyle = {
  width: "80%",
  mx: "auto",
  // mt: -10,
  rowSpacing: 10,
  justifyContent: "space-between",
};
const itemsStyle = {
  xs: 5,
};

export type OptionsListProps = {
  setScore: Dispatch<SetStateAction<number>>;
  setEnableShowNextQuestion: Dispatch<SetStateAction<boolean>>;
  selectedOptionNumber: number;
  setSelectedOptionNumber: Dispatch<SetStateAction<number>>
} & Pick<QuestionType, "questionOptions" | "trueOption">;


const OptionsList: FC<OptionsListProps> = ({
  questionOptions,
  trueOption,
  selectedOptionNumber,
  setSelectedOptionNumber,
  setScore,
  setEnableShowNextQuestion
}: OptionsListProps) => {

  // const [selectedOptionNumber, setSelectedOptionNumber] = useState<number>(0);
  const [randomQuestionOptions, setRandomQuestionOptions] = useState<OptionProps[]>([])

  useEffect(() => {
    setRandomQuestionOptions(() => questionOptions?.toSorted(() => Math.random() - 0.5))
  }, [questionOptions])

  useEffect(() => {
    if(selectedOptionNumber != 0) {
      if(selectedOptionNumber == trueOption) {
        setScore(prevScore => {
          return prevScore + 1
        })
      }
      setEnableShowNextQuestion(true);
    }
  }, [selectedOptionNumber])

  return (
    <Grid container {...containerStyle}>
      {randomQuestionOptions?.map((option) => (
        <Grid {...itemsStyle} key={option.optionNumber}>
          <Option
            optionText={option.optionText}
            optionNumber={option.optionNumber}
            trueOption={trueOption}
            selectedOptionNumber={selectedOptionNumber}
            setSelectedOptionNumber={setSelectedOptionNumber}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default OptionsList;
