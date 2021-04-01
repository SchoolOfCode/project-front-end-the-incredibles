import React from "react";
import { useNumberInput, Button, HStack, Input } from "@chakra-ui/react";

function QuantityInput({ setState, disabled, quantity }) {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 0,
    max: quantity,
    precision: 0,
  });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ onChange: () => console.log("hi") });

  setState(input.value);

  return (
    <HStack maxW="150px">
      <Button {...dec} color="#FF5A5F" disabled={disabled}>
        -
      </Button>
      <Input {...input} />
      <Button {...inc} color="#FF5A5F" disabled={disabled}>
        +
      </Button>
    </HStack>
  );
}

export default QuantityInput;
