import "../../index.css";
import BusinessProfile from "./"
//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Business Profile',
	component : BusinessProfile,
	argTypes  : {
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <BusinessProfile {...args} />;

export const exampleBusinessProfile = Template.bind({});

exampleBusinessProfile.args = {
	/*👇 The args you need here will depend on your component */
	name : 'Macramé Master',
	about:  "I make the coolest things",
	img: {
		src: "https://images.unsplash.com/photo-1599553784414-9e1e95b454e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
		alt: "Some macramè"
	},
	isTrading: true
};

