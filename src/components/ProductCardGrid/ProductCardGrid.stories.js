import '../../index.css';
import mockData from '../../libs/mockData';
import ProductCardGrid from "./";
//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'ProductCardGrid',
	component : ProductCardGrid,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ProductCardGrid {...args} />;

export const ProductCardGridExample = Template.bind({});

ProductCardGridExample.args = {
	products       : mockData.products
};
