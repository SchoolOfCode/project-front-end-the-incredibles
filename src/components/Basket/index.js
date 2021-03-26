import React from 'react';
import useBasket from '../../hooks/useBasket';
import Button from '../Buttons/Button';
import CheckoutButton from '../Buttons/CheckoutButton';
import RemoveProductButton from '../Buttons/RemoveProductButton';
import { basket, productsContainer } from './Basket.module.css';


function Basket({cartItems, onRemoveAll, onRemoveOne, onAdd}) {

	return (
		<div className={`${basket} basket`}>
			<h2>Basket</h2>
			{cartItems &&
				cartItems.map((product) => {
					return (
						<div className={productsContainer}>
							<p>{product.productName}</p>
							<p>{product.qty}</p>
							<Button textContent="+" onClick={() => onAdd(product, 1)}/>
							<Button textContent="-" onClick={() => onRemoveOne(product)}/>
							<RemoveProductButton
								onClick={() => onRemoveAll(product)}
							/>
						</div>
					);
				})}
			<CheckoutButton onClick={() => console.log(cartItems)} />
		</div>
	);
}

export default Basket;
