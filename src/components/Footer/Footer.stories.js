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

//  Footer.args = {
//   /*👇 The args you need here will depend on your component */
//   bg: "#ff5a5f",
//   color: "white",
//   textContent: "I am a button",
//   onClick: (e) => {
//     e.target.textContent = "I was clicked!";
//   },
// };

// export const PlainDisabledButton = Template.bind({});

// PlainDisabledButton.args = {
// 	/*👇 The args you need here will depend on your component */
// 	bg          : 'white',
// 	color       : 'black',
// 	textContent : 'I am Liam disabled button',
// 	disabled    : true,
// 	onClick     : (e) => {
// 		e.target.textContent = 'I was clicked!';
// 	},
// };

// export const TealButton = Template.bind({});

// TealButton.args = {
// 	/*👇 The args you need here will depend on your component */
// 	bg          : 'teal',
// 	color       : 'white',
// 	textContent : 'I am a teal button',
// };
