import { Box } from "@mui/material";
import { type OptionProps } from "./Option";
const boxStyle = {
  bgcolor: "customYellow.main",
  height: 100,
  width: "80%",
  mx: "auto",
  my: 20,
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
};

export type QuestionType= {
  id: string;
  questionText: string;
  questionOptions: OptionProps[],
  trueOption: number
}
const Question = () => {
  return (
    <Box {...boxStyle}>
      <h4>نویسنده کتاب باشگاه پنج صبحی ها چه کسی است؟</h4>
      {/* recieve question text */}
      {/* <h4>{Question.questionText}</h4> */}
    </Box>
  );
};

export default Question;
