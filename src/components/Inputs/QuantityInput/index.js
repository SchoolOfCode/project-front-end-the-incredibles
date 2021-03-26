import React from "react";
import { useNumberInput, Button, HStack, Input } from "@chakra-ui/react";

function QuantityInput(props) {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 0,
    min: 0,
    max: 100,
    precision: 0,
  });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({onChange: () => console.log("hi") });

  return (
    <HStack maxW="150px">
      <Button {...dec} color="#FF5A5F">
        -
      </Button>
      <Input {...input} />
      <Button {...inc} color="#FF5A5F">
        +
      </Button>
    </HStack>
  );
}

export default QuantityInput;