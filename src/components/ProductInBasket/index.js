import React from 'react';
import Button from '../Buttons/Button';
import { productContainer } from './ProductInBasket.module.css';

function ProductInBasket({ product, onAdd, onRemoveOne, onRemoveAll }) {
	return (
		<div className={productContainer}>
			<p>{product.productName}</p>
			<p>{product.qty}</p>
			<Button textContent='+' onClick={() => onAdd(product, 1)} />
			<Button textContent='-' onClick={() => onRemoveOne(product)} />
			<Button
				lassNames='removeProduct'
				textContent='remove'
				onClick={() => onRemoveAll(product)}
			/>
		</div>
	);
}

export default ProductInBasket;
