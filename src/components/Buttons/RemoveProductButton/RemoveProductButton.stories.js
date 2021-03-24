import React from 'react';
import AddToCartButton from './index.js';

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Add to cart',
	component : AddToCartButton,
	argTypes  : {
		onClick : (e) => {
			e.target.textContent = 'I was clicked!';
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <AddToCartButton {...args} />;

export const PlainButton = Template.bind({});

PlainButton.args = {
	/*👇 The args you need here will depend on your component */
};
