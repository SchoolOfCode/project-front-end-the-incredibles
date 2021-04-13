import '../../index.css';
import mockData from '../../libs/mockData';
import ProductInBasket from './';
//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'ProductInBasket',
	component : ProductInBasket,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ProductInBasket {...args} />;

export const ProductInBasketExample = Template.bind({});

ProductInBasketExample.args = {
	product : {
		...mockData.products[0],
		quantityInBasket : 3,
	},
};
