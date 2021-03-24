import React from "react";
import CustomerNavBar from "../CustomerNavBar/index";

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "NavBar",
  component: CustomerNavBar,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <CustomerNavBar {...args} />;

export const CustomerNavBarr = Template.bind({});
