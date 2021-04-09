import '../../index.css';
import BusinessInfoForm from './';

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'BusinessInfoForm',
	component : BusinessInfoForm,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <BusinessInfoForm {...args} />;

export const BusinessInfoFormExample = Template.bind({});

BusinessInfoFormExample.args = {
	updateData   : () => console.log('data updated'),
	businessInfo : {
		businessName : 'Macramé Master',
		primaryEmail : 'I make the coolest things',
		businessLogo :
			'https://images.unsplash.com/photo-1599553784414-9e1e95b454e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
		isTrading    : true,
	},
};
