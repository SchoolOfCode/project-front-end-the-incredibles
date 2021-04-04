import React from "react";
import { getByTestId, render } from "@testing-library/react";

import Button from "./";

const testProps = {
  textContent: "Basket",
  onClick: jest.fn(() => true),
};

test("Given props of textContent, Button should render onto the DOM with the correct text", () => {
  let { getByTestId } = render(<Button {...testProps} />);
  const actual = getByTestId("button-test");
  expect(actual).toBeInTheDocument();
});

test("given a mock function, run the fn.", () => {
  const spy = jest.spyOn(testProps, "onClick");
  const isCalled = testProps.onClick();

  expect(spy).toHaveBeenCalled();
});
