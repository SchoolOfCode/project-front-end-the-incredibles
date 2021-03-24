import React from 'react';
import '../../index.css';
import CallToAction from './index.js';

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Call To Action',
	component : CallToAction,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <CallToAction {...args} />;

export const CallToActionGeneric = Template.bind({});

CallToActionGeneric.args = {
	/*👇 The args you need here will depend on your component */
};
