import React, { ChangeEvent } from "react";
import { CheckboxIcon, Input, InputGroup, InputProps, InputRightAddon, InputRightElement } from "@chakra-ui/react";
// import { DownloadIcon } '@chakra-ui/icons'

interface InputIconComponentProps extends Omit<InputProps, "value" | "onChange"> {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function InputIconComponent({
  value,
  handleChange,
  backgroundColor,
  opacity,
  width,
  size,
  border,
}: InputIconComponentProps) {
  return (
    <>
    <InputGroup width={width}>
      <Input
        value={value}
        onChange={handleChange}
        size={size}
        backgroundColor={backgroundColor}
        opacity={opacity}
        border={border}
        _focusVisible={{outline: 'none'}}
        _hover={{outline: 'none'}}
      />
      <InputRightElement>
        <CheckboxIcon color='green.500' />
      </InputRightElement>
    </InputGroup>
    </>
  );
}

export default InputIconComponent;