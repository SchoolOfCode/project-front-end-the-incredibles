import React from 'react';
import Button from '../Buttons/Button';
import { productContainer } from './ProductInBasket.module.css';

function ProductInBasket({
	product,
	onAdd,
	onRemoveOne,
	onRemoveAll,
}) {
	const outOfStock = product.quantityInBasket >= product.quantity;
	const oneInBasket = product.quantityInBasket === 1;

	return (
		<div className={productContainer}>
			<p>{product.productName}</p>
			<Button
				textContent='-'
				onClick={onRemoveOne}
				disabled={oneInBasket}
			/>
			<p>{product.quantityInBasket}</p>
			<Button textContent='+' onClick={onAdd} disabled={outOfStock} />
			<Button
				classNames='removeProduct'
				textContent='remove'
				onClick={onRemoveAll}
			/>
		</div>
	);
}

export default ProductInBasket;
