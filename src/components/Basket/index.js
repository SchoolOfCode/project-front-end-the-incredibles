import React from 'react';
import useBasket from '../../hooks/useBasket';
import Button from '../Buttons/Button';
import CheckoutButton from '../Buttons/CheckoutButton';
import RemoveProductButton from '../Buttons/RemoveProductButton';
import { basket } from './Basket.module.css';


function Basket({cartItems, onRemove}) {

	return (
		<div className={`${basket} basket`}>
			<h2>Basket</h2>
			{cartItems &&
				cartItems.map((product) => {
					return (
						<div>
							<p>{product.productName}</p>
							<p>{product.qty}</p>
							<RemoveProductButton
								onClick={() => onRemove(product)}
							/>
						</div>
					);
				})}
			<CheckoutButton onClick={() => console.log(cartItems)} />
		</div>
	);
}

export default Basket;
