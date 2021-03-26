import React from 'react';
import useBasket from '../../hooks/useBasket';
import mockData from '../../libs/mockData.js';
import Basket from '../Basket';
import BusinessProfile from '../BusinessProfile';
import ProductCard from '../ProductCard';
import {
	cardContainer,
	container,
	profileContainer,
} from './CustomerPage.module.css';

function CustomerPage() {
	const { cartItems, onAdd, onRemoveAll, onRemoveOne } = useBasket();
	const {
		businessName,
		businessAbout,
		businessImg,
		isTrading,
		products,
	} = mockData;

	return (
		<div className={container}>
			<Basket
				cartItems={cartItems}
				onRemoveAll={onRemoveAll}
				onRemoveOne={onRemoveOne}
				onAdd={onAdd}
			/>
			<div className={profileContainer}>
				<BusinessProfile
					name={businessName}
					about={businessAbout}
					img={businessImg}
					isTrading={isTrading}
				/>
			</div>
			<div className={cardContainer}>
				{products.map((product, i) => (
					<ProductCard product={product} key={i} onClick={onAdd} />
				))}
			</div>
		</div>
	);
}

export default CustomerPage;
