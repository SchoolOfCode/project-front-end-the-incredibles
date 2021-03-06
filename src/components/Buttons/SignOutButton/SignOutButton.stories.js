import React from 'react';
import SignOutButton from './index.js';
import "../../../index.css";

//๐ This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Sign Out Button',
	component : SignOutButton,
	argTypes  : {
		onClick : (e) => {
			e.target.textContent = 'I was clicked!';
		},
	},
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <SignOutButton {...args} />;

export const PlainButton = Template.bind({});

PlainButton.args = {
	/*๐ The args you need here will depend on your component */
};
