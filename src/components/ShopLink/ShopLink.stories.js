import ShopLink from './';
//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'ShopLink',
	component : ShopLink,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ShopLink {...args} />;

export const ShopLinkExample = Template.bind({});

ShopLinkExample.args = {
	businessName : 'Macrame Master',
};
