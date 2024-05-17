import { Button } from "@mui/material";
import { type FC, useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
export type OptionProps = {
  optionText: string;
  optionNumber: number;
  trueOption: number;
  onSelectOption: Dispatch<SetStateAction<boolean>>;
  showOptionsBGStyle: boolean;
};

const Option: FC<OptionProps> = ({
  optionText,
  optionNumber,
  trueOption,
  showOptionsBGStyle,
  onSelectOption,
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
      opacity: 0.9, 
    },
  };

  useEffect(() => {
    if(showOptionsBGStyle == true){
      if (optionNumber == trueOption) {
        setBgColor("#7fff00")
      }
      else {
        setBgColor("#ff0000")
      }
    }
  }, [showOptionsBGStyle])

  return (
    <>
      {showOptionsBGStyle ? (
        <Button sx={{ ...buttonStyle }} onClick={() => onSelectOption(true)} disabled>
          {optionText}
        </Button>
      ) : (
        <Button sx={{ ...buttonStyle }} onClick={() => onSelectOption(true)} >
          {optionText}
        </Button>
      )}
    </>
  );
};

export default Option;
