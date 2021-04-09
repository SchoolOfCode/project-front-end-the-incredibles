import '../../index.css';
import Tutorial from './';
//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'TutorialPage',
	component : Tutorial,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Tutorial {...args} />;

export const exampleTutorial = Template.bind({});

exampleTutorial.args = {
	/*👇 The args you need here will depend on your component */
};
