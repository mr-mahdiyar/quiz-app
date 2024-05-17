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
  onSelectOption: Dispatch<SetStateAction<boolean>>;
  showOptionsBGStyle: boolean;
} & Pick<QuestionType, "questionOptions" | "trueOption">;


const OptionsList: FC<OptionsListProps> = ({
  questionOptions,
  trueOption,
}: OptionsListProps) => {

  const [selectedOptionNumber, setSelectedOptionNumber] = useState<number>(0);
  const [randomQuestionOptions, setRandomQuestionOptions] = useState<OptionProps[]>([])

  useEffect(() => {
    setRandomQuestionOptions(() => questionOptions?.toSorted(() => Math.random() - 0.5))
  }, [questionOptions])
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
