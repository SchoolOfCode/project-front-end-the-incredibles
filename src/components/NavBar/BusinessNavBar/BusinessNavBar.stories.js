import React from "react";
import BusinessNavBar from "../BusinessNavBar/index";

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "NavBar",
  component: BusinessNavBar,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <BusinessNavBar {...args} />;

export const BusinessNavBarr = Template.bind({});
