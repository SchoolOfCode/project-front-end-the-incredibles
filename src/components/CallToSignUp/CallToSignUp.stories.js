import React from 'react';
import '../../index.css';
import CallToSignUp from './index.js';

//๐ This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Call To Sign Up',
	component : CallToSignUp,
	argTypes  : {},
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <CallToSignUp {...args} />;

export const CallToSignUpGeneric = Template.bind({});

CallToSignUpGeneric.args = {
	/*๐ The args you need here will depend on your component */
};
