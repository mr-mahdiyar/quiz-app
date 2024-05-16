import { Box } from "@mui/material";
import Questions from "./components/Question";
import OptionsList from "./components/OptionsList";
import { getQuestionsFromServer, selectAllQuestion } from "./store/questionSlice";
import { useEffect } from "react";
import { useQuestionSelector } from "./store/hooks";
import { useQuestionDispatch } from "./store/hooks";
const boxStyle = {
  bgcolor: "customBlue.main",
  height: "98%",
  width: "99%",
  boxSizing: "border-box",
  position: "absolute",
  top: "50%",
  left: "50%",
  sx: { transform: "translate(-50%, -50%)" }
}

const App = () => {
  const dispatch = useQuestionDispatch()

  useEffect(() => {
    dispatch(getQuestionsFromServer())
  }, [])

  const questions = useQuestionSelector(selectAllQuestion);

  return (
    <Box {...boxStyle}>
      <Questions />
      <OptionsList />
    </Box>
  );
};

export default App;
