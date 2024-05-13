import { Box } from "@mui/material";
import Questions from "./components/Questions";

const App = () => {
  return (
    <Box
      bgcolor={"customBlue.main"}
      height={"98%"}
      width={"99%"}
      boxSizing={"border-box"}
      position={"absolute"}
      top={"50%"}
      left={"50%"}
      sx={{ transform: "translate(-50%, -50%)" }}
    >
      <Questions />
    </Box>
  );
};

export default App;
