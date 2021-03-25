import React from "react";
import ProductCard from "../ProductCard/index";

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Product Card",
  component: ProductCard,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ProductCard {...args} />;

export const ExampleProductCard = Template.bind({});
