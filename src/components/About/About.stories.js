import '../../index.css';
import About from './';
//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'AboutPage',
	component : About,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <About {...args} />;

export const exampleAbout = Template.bind({});

exampleAbout.args = {
	/*👇 The args you need here will depend on your component */
};
