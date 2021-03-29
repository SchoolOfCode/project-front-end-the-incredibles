import React from 'react';
import useBasket from '../../hooks/useBasket';
import mockData from '../../libs/mockData.js';
import Basket from '../Basket';
import BusinessProfile from '../BusinessProfile';
import ProductCardGrid from '../ProductCardGrid';
import { container, profileContainer } from './CustomerPage.module.css';

function CustomerPage() {
	const { cartItems, onAdd, onRemoveAll, onRemoveOne } = useBasket();
	const { products } = mockData;

	return (
		<div className={container}>
			<Basket
				cartItems={cartItems}
				onRemoveAll={onRemoveAll}
				onRemoveOne={onRemoveOne}
				onAdd={onAdd}
			/>
			<div className={profileContainer}>
				<BusinessProfile businessInfo={mockData} />
			</div>
			<ProductCardGrid products={products} onClick={onAdd}/>
		</div>
	);
}

export default CustomerPage;
