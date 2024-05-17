import Option from "./Option";
import Grid from "@mui/material/Unstable_Grid2";
import { type QuestionType } from "./Question";
import { type FC, Dispatch, SetStateAction } from "react";

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
  onSelectOption,
  showOptionsBGStyle,
}: OptionsListProps) => {
  return (
    <Grid container {...containerStyle}>
      {questionOptions?.map((option) => (
        <Grid {...itemsStyle} key={option.optionNumber}>
          <Option
            optionText={option.optionText}
            optionNumber={option.optionNumber}
            trueOption={trueOption}
            onSelectOption={onSelectOption}
            showOptionsBGStyle={showOptionsBGStyle}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default OptionsList;
