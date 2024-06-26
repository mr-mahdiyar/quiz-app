import { Box, Typography } from "@mui/material";
import { type OptionProps } from "./Option";
const boxStyle = {
  bgcolor: "customYellow.main",
  height: 100,
  width: "80%",
  mx: "auto",
  mt: 10,
  mb: 10,
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
type QuestionProps = {
  questionText: string
}
const Question = ({questionText}: QuestionProps) => {
  return (
    <Box {...boxStyle}>
      <Typography variant="h5" fontFamily={"Dirooz"}>{questionText}</Typography>
    </Box>
  );
};

export default Question;
