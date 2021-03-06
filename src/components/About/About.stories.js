import '../../index.css';
import About from './';
//๐ This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'AboutPage',
	component : About,
	argTypes  : {},
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <About {...args} />;

export const exampleAbout = Template.bind({});

exampleAbout.args = {
	/*๐ The args you need here will depend on your component */
};
