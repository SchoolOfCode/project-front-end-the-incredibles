import '../../index.css';
import Product from './';

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Product',
	component : Product,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Product {...args} />;

export const ProductExample = Template.bind({});

ProductExample.args = {
	product       : { productName: 'one', productPrice: 3.99, quantity: 4 },
	removeProduct : () => '',
	updateProduct : () => '',
};
