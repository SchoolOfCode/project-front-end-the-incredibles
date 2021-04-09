import React from "react";
import Footer from "./index.js";

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Footer",
  component: Footer,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Footer {...args} />;

export const HomeFooter = Template.bind({});

