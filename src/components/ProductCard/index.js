import React from 'react';
import AddtoCartButton from '../Buttons/AddToCartButton';
import QuantityInput from '../Inputs/NumberInput';
import styles from './ProductCard.module.css';

function ProductCard({ name, price, inventoryQuantity = 0 }) {
	const inStockClass = inventoryQuantity ? 'Stocked' : 'OutOfStock';
	return (
		<div className={`${styles.ContentFlex} ${styles[inStockClass]}`}>
			<div className={styles.innerContent}>
				<img
					src='https://images.unsplash.com/photo-1590069832258-a222a34722c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
					alt=''
				/>
				<p>{name}</p>
				<p>£{price}</p>
				<QuantityInput />
				{inventoryQuantity ? <AddtoCartButton /> : <p>Out of stock</p>}
			</div>
		</div>
	);
}

export default ProductCard;
