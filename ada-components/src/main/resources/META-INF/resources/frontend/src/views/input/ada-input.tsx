import React, { ChangeEvent } from "react";
import { Input, InputProps } from "@chakra-ui/react";

interface InputComponentProps extends Omit<InputProps, "value" | "onChange"> {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InputComponent({
  value,
  handleChange,
  backgroundColor,
  opacity,
  width,
  size,
  border,
}: InputComponentProps) {
  return (
    <>
      <Input
        value={value}
        onChange={handleChange}
        size={size}
        backgroundColor={backgroundColor}
        opacity={opacity}
        width={width}
        border={border}
        _focusVisible={{outline: 'none'}}
        _hover={{outline: 'none'}}
      />
    </>
  );
}

export default InputComponent;