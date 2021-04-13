import '../../../index.css';
import IsTradingInput from './index.js';

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Is Trading Input',
	component : IsTradingInput,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <IsTradingInput {...args} />;

export const IsTradingInputExample = Template.bind({});

IsTradingInputExample.args = {
	currentValue    : true,
	updateIsTrading : () => console.log('updated'),
};
