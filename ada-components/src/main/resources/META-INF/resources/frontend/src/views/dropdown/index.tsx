import React from "react";
import { Select, SelectProps } from "@chakra-ui/react";

interface DropDownProps extends Omit<SelectProps, "placeholder"> {
  placeholder: string;
}

function DropDown({
  width,
  placeholder,
  size,
  backgroundColor,
  border,
}: DropDownProps) {
  return (
    <Select
      placeholder={placeholder}
      size={size}
      width={width}
      backgroundColor={backgroundColor}
      border={border}
      _focusVisible={{outline: 'none'}}
      _hover={{outline: 'none'}}
    ></Select>
  );
}

export default DropDown;