import { Button } from "@mui/material";

export type OptionProps = {
  optionText: string;
  optionNumber: number;
  // truthyChecking: () => number; this function should seperate extract option number from text and send it for check truthy.
};

const buttonStyle = {
  width: "100%",
  color: "black",
  bgcolor: "customYellow.main",
  borderRadius: 5,
  textAlign: "center",
  fontSize: "22px",
  ":hover": {
    bgcolor: "customYellow.main",
    filter: "brightness(97%)",
  },
};

const Option = ({ optionText = " گزینه اول" }: OptionProps) => {
  return (
    <Button sx={{ ...buttonStyle }}>
      <h4>{optionText}</h4>
    </Button>
  );
};

export default Option;
