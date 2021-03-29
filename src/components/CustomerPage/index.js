import React from 'react';
import useBasket from '../../hooks/useBasket';
import mockData from '../../libs/mockData.js';
import Basket from '../Basket';
import BusinessProfile from '../BusinessProfile';
import ProductCardGrid from '../ProductCardGrid';
import { container, profileContainer } from './CustomerPage.module.css';
import useGet from '../../hooks/useGet'

function CustomerPage() {
	const { cartItems, onAdd, onRemoveAll, onRemoveOne } = useBasket();
	const { products } = mockData;
	const [businessInfo, setBusinessInfo] = useGet()

	return (
		<div className={container}>
			<Basket
				cartItems={cartItems}
				onRemoveAll={onRemoveAll}
				onRemoveOne={onRemoveOne}
				onAdd={onAdd}
			/>
			<div className={profileContainer}>
				<BusinessProfile businessInfo={businessInfo} />
			</div>
			<ProductCardGrid products={products} onClick={onAdd}/>
		</div>
	);
}

export default CustomerPage;
