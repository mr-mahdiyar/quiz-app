import { FormControl, Input } from "@mui/material";
import { ChangeEvent } from "react";

type CustomInputProps = {
  placeHolder: string;
  value: string;
  onChangeValue: (newValue: string) => void;
};

const CustomInput = ({
  placeHolder,
  value,
  onChangeValue,
}: CustomInputProps) => {
  return (
    <>
      <FormControl>
        <Input
          placeholder={placeHolder}
          sx={{ mb: 5 }}
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChangeValue(event.target.value)
          }}
        />
      </FormControl>
    </>
  );
};

export default CustomInput;
