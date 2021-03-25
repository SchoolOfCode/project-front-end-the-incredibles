import { useState } from "react";
import QuantityInput from "./index.js";
import "../../../index.css";

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "quantity",
  component: QuantityInput,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <QuantityInput {...args} />;

export const QuantityInputExample = Template.bind({});

QuantityInputExample.args = {};
