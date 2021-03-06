import '../../index.css';
import Tutorial from './';
//๐ This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'TutorialPage',
	component : Tutorial,
	argTypes  : {},
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Tutorial {...args} />;

export const exampleTutorial = Template.bind({});

exampleTutorial.args = {
	/*๐ The args you need here will depend on your component */
};
