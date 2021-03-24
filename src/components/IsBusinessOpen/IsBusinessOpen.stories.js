import React from "react";
import IsBusinessOpen from "./index.js";

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "IsTrading",
  component: IsBusinessOpen,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <IsBusinessOpen {...args} />;

export const IsTrading = Template.bind({});
