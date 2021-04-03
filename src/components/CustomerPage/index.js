import { useEffect, useState } from 'react';
import useBasket from '../../hooks/useBasket';
import Basket from '../Basket';
import BusinessProfile from '../BusinessProfile';
import ProductCardGrid from '../ProductCardGrid';
import { container, profileContainer } from './CustomerPage.module.css';

function CustomerPage({ businessInfo }) {
	const products = businessInfo.products.map((product) => {
		const newProd = { ...product, quantityInBasket: 0 };
		return newProd;
	})
	const { cartItems, onAdd, onRemoveAll, onRemoveOne } = useBasket(products);
	
	const [ inBasket, setInBasket ] = useState([]);
	useEffect(
		() => {
			const productsInBasket = cartItems.filter(
				(product) => product.quantityInBasket !== 0
			);

			setInBasket(productsInBasket);
		},
		[ cartItems ]
	);

	console.log(cartItems);
	console.log(inBasket)

	return (
		<div className={container}>
			{/* these are where all the methods are being handed down as props to the basket component */}

			<Basket
				inBasket={inBasket}
				onRemoveAll={onRemoveAll}
				onRemoveOne={onRemoveOne}
				onAdd={onAdd}
			/>
			<div className={profileContainer}>
				<BusinessProfile businessInfo={businessInfo} />
			</div>
			{/* products is an array in mockdata which is passed down as a prop to this componenet and can add using the onAdd method */}
			<ProductCardGrid
				cartItems={cartItems}
				onAdd={onAdd}
			/>
		</div>
	);
}

export default CustomerPage;
