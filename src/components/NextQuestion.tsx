import { Dispatch, SetStateAction } from "react";
import { Box, Button } from "@mui/material";

const boxStyle = {
    width: "90%",
    textAlign: "left",
    mt: 10,
}
const ButtonStyle = {
    bgcolor: "customYellow.main",
    typography: "h5",
    p: 2,
    color: "black",
    borderRadius: 5,
    ":hover": {
        bgcolor: "customYellow.main",
        filter: "brightness(95%)"
    }
}
type NextQuestionPropsType = {
  enableShowNextQuestion: boolean;
  setSelectedOptionNumber: Dispatch<SetStateAction<number>>;
  setCurrentQuestionNumber: Dispatch<SetStateAction<number>>;
  setEnableShowNextQuestion: Dispatch<SetStateAction<boolean>>;
};
const NextQuestion = ({
  enableShowNextQuestion,
  setCurrentQuestionNumber,
  setEnableShowNextQuestion,
  setSelectedOptionNumber,
}: NextQuestionPropsType) => {
  return (
    <>
      {enableShowNextQuestion ? (
        <Box {...boxStyle}>
          <Button
            sx={{...ButtonStyle}}
            onClick={() => {
              setSelectedOptionNumber(0);
              setTimeout(() => {
                setCurrentQuestionNumber((prevNumber) => {
                  return prevNumber + 1;
                });
              }, 200);
              setEnableShowNextQuestion(false);
            }}
          >
            سوال بعد
          </Button>
        </Box>
      ) : null}
    </>
  );
};

export default NextQuestion;
