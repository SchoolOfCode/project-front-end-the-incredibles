import React from 'react';
import SignInUpButton from './index.js';
import "../../../index.css";

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Sign In/Up Button',
	component : SignInUpButton,
	argTypes  : {
		onClick : (e) => {
			e.target.textContent = 'I was clicked!';
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SignInUpButton {...args} />;

export const PlainButton = Template.bind({});

PlainButton.args = {
	textContent: "sign in"
};

export const PlainButton2 = Template.bind({});

PlainButton2.args = {
	textContent: "sign up"
};