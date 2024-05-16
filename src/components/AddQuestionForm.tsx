import { Box, FormControl, Button } from "@mui/material";
import CustomInput from "./CustomInput";
import { type QuestionType } from "./Question";
import { type OptionProps } from "./Option";
import { useState } from "react";
import { addQuestionToServer } from "../store/questionSlice";
import { useQestionDispatch } from "../store/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { type MouseEvent } from "react";

const boxStyle = {
  width: "80%",
  textAlign: "center",
  mx: "auto",
  mt: 10,
  bgcolor: "#ffff",
  p: 5,
};
const formStyle = {
  width: "100%",
};

const AddQuestionForm = () => {
  const dispatch = useQestionDispatch();
  const [questionText, setQuestionText] = useState<string>("");
  const [firstOption, setFirtsOption] = useState<string>("");
  const [secondOption, setSecondOption] = useState<string>("");
  const [thirdOption, setThirdOption] = useState<string>("");
  const [fourthOption, setFourthOption] = useState<string>("");
  const [trueOptionNumber, setTrueOptionNumber] = useState<unknown>("");
  const submitHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const firstOp: OptionProps = {
      optionNumber: 1,
      optionText: firstOption,
    };
    const secondOp: OptionProps = {
      optionNumber: 2,
      optionText: secondOption,
    };
    const ThirdOp: OptionProps = {
      optionNumber: 3,
      optionText: thirdOption,
    };
    const FourhOp: OptionProps = {
      optionNumber: 4,
      optionText: fourthOption,
    };
    const newQuestion: QuestionType = {
      id: nanoid(),
      questionText,
      trueOption: trueOptionNumber as number,
      questionOptions: [firstOp, secondOp, ThirdOp, FourhOp],
    };

    dispatch(addQuestionToServer(newQuestion));
    setQuestionText("")
    setFirtsOption("");
    setSecondOption("")
    setThirdOption("")
    setFourthOption("")
    setTrueOptionNumber("")
  };

  return (
    <Box {...boxStyle}>
      <FormControl sx={{ ...formStyle }}>
        <CustomInput
          placeHolder="متن سوال"
          value={questionText}
          onChangeValue={(text: string) => setQuestionText(text)}
        />
        <CustomInput
          placeHolder="گزینه یک"
          value={firstOption}
          onChangeValue={(text: string) => setFirtsOption(text)}
        />
        <CustomInput
          placeHolder="گزینه دو"
          value={secondOption}
          onChangeValue={(text: string) => setSecondOption(text)}
        />
        <CustomInput
          placeHolder="گزینه سه"
          value={thirdOption}
          onChangeValue={(text: string) => setThirdOption(text)}
        />
        <CustomInput
          placeHolder="گزینه چهار"
          value={fourthOption}
          onChangeValue={(text: string) => setFourthOption(text)}
        />
        <CustomInput
          placeHolder="پاسخ صحیح"
          value={trueOptionNumber}
          onChangeValue={(text: string) => setTrueOptionNumber(text)}
        />
      </FormControl>
      <Button onClick={submitHandler}>ثبت</Button>
    </Box>
  );
};

export default AddQuestionForm;
