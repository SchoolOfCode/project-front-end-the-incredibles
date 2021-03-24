import React from 'react';
import CheckoutButton from './index.js';

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Checkout',
	component : CheckoutButton,
	argTypes  : {
		onClick : (e) => {
			e.target.textContent = 'I was clicked!';
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <CheckoutButton {...args} />;

export const PlainButton = Template.bind({});

PlainButton.args = {
	/*👇 The args you need here will depend on your component */
};
