import { Button } from "@mui/material";
import { type FC, useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
export type OptionProps = {
  optionText: string;
  optionNumber: number;
  trueOption: number;
  selectedOptionNumber: number;
  setSelectedOptionNumber: Dispatch<SetStateAction<number>>
};

const Option: FC<OptionProps> = ({
  optionText,
  optionNumber,
  trueOption,
  selectedOptionNumber,
  setSelectedOptionNumber
}: OptionProps) => {

  const [bgColor, setBgColor] = useState<string>("customYellow.main");
  const buttonStyle = {
    width: "100%",
    color: "black",
    bgcolor: bgColor,
    borderRadius: 5,
    textAlign: "center",
    fontSize: "24px",
    height: 100,
    typography: "h5",
    ":hover": {
      bgcolor: bgColor,
      filter: "brightness(97%)",
    },
    '&.Mui-disabled': {
      color: 'black',
      opacity: 1, 
    },
  };

  useEffect(() => {
    if(selectedOptionNumber != 0){
      if (optionNumber == trueOption) {
        setBgColor("#7fff00")
      }
      else if (selectedOptionNumber == optionNumber){
        setBgColor("#ff0000")
      }
    }
  }, [selectedOptionNumber])

  const selectOptionHandler = () => {
    // onSelectOption(true);
    setSelectedOptionNumber(optionNumber)
  }
  return (
    <>
      {selectedOptionNumber != 0 ? (
        <Button sx={{ ...buttonStyle }} disabled>
          {optionText}
        </Button>
      ) : (
        <Button sx={{ ...buttonStyle }} onClick={selectOptionHandler } >
          {optionText}
        </Button>
      )}
    </>
  );
};

export default Option;
