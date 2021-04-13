import '../../../index.css';
import Blob from './Blob.js';
//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'BlobPage',
	component : Blob,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Blob {...args} />;

export const exampleBlob = Template.bind({});

exampleBlob.args = {
	updateInfo : () => console.log('update'),
};
