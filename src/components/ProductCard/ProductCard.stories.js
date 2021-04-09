import React from 'react';
import ProductCard from '../ProductCard/index';

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Product Card',
	component : ProductCard,
	argTypes  : {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ProductCard {...args} />;

export const ExampleProductCard = Template.bind({});

ExampleProductCard.args = {
	product : {
		productName      : 'Product 1',
		productPrice     : 5.99,
		productImage     :
			'https://images.unsplash.com/photo-1617895601040-32cf8ed00eeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		quantity         : 2,
		quantityInBasket : 1,
	},
	onAdd   : () => console.log('added'),
};
