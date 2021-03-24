import React from 'react';
import SignInButton from './index.js';

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Sign In Button',
	component : SignInButton,
	argTypes  : {
		onClick : (e) => {
			e.target.textContent = 'I was clicked!';
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SignInButton {...args} />;

export const PlainButton = Template.bind({});

PlainButton.args = {
};
