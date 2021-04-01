import React from 'react';
import Button from './index.js';
import "../../../index.css";

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Button',
	component : Button,
	argTypes  : {
		onClick : (e) => {
			e.target.textContent = 'I was clicked!';
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const PlainButton = Template.bind({});

PlainButton.args = {
	/*👇 The args you need here will depend on your component */
	textContent : 'I am a button',
	onClick     : (e) => {
		e.target.textContent = 'I was clicked!';
	},
};

export const PlainDisabledButton = Template.bind({});

PlainDisabledButton.args = {
	/*👇 The args you need here will depend on your component */
	textContent : 'I a disabled button',
	disabled    : true,
	onClick     : (e) => {
		e.target.textContent = 'I was clicked!';
	},
};

export const CheckoutButton = Template.bind({});

CheckoutButton.args = {
	/*👇 The args you need here will depend on your component */
	className: "blackBtn",
	textContent : 'Checkout',
	onClick     : (e) => {
		e.target.textContent = 'checked out!';
	},
};

export const RemoveButton = Template.bind({});

RemoveButton.args = {
	/*👇 The args you need here will depend on your component */
	className: "removeProduct",
	textContent : 'Remove',
	onClick     : (e) => {
		e.target.textContent = 'removed!';
	},
};

export const AddToCartButton = Template.bind({});

AddToCartButton.args = {
	/*👇 The args you need here will depend on your component */
	className: "addToCart",
	textContent : 'Remove',
	onClick     : (e) => {
		e.target.textContent = 'removed!';
	},
};
