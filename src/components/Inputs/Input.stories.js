import {useState} from 'react';
import Input from './Input/index.js';
import "../../index.css";

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Input',
	component : Input,
	argTypes  : {
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Input {...args} />;

export const BusinessNameInput = Template.bind({});

BusinessNameInput.args = {
	updateState: (e) => console.log(e),
	type: "text",
	labelText: "Business Name:",
	id: "businessName"
};

export const NumInput = Template.bind({});

NumInput.args = {
	updateState: (e) => console.log(e),
	type: "number",
	labelText: "Quantity:",
	id: "quantity"
};

export const FileInput = Template.bind({});

FileInput.args = {
	updateState: (e) => console.log(e),
	type: "file",
	labelText: "Upload Picture:",
	id: "picture"
};