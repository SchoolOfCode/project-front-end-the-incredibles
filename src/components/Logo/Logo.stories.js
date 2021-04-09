import '../../index.css';
import Logo from './';

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Logo',
	component : Logo,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Logo {...args} />;

export const LogoExample = Template.bind({});

Logo.args = {};
