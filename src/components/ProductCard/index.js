//import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import Button from '../Buttons/Button';
import QuantityInput from '../Inputs/QuantityInput';
import styles from './ProductCard.module.css';

function ProductCard({ product, onClick }) {
	// this is all the product information
	// product here is the...
	//const { isAuthenticated } = useAuth0();
	const { productName, productPrice, productImage, quantity } = product;
	const [ desiredQuantity, setDesiredQuantity ] = useState(0);
	const [ disableAdd, setDisableAdd ] = useState(false);

	// if (isAuthenticated) {
	//   setDisableAdd(false);
	// }

	const inStockClass = quantity ? 'Stocked' : 'OutOfStock';
	return (
		<div className={`${styles.ContentFlex} ${styles[inStockClass]}`}>
			<div className={styles.innerContent}>
				<img src={productImage} alt={'product'} />
				<p className={styles.name}>{productName}</p>
				<p className={styles.price}>£{productPrice}</p>
				<QuantityInput
					setState={setDesiredQuantity}
					disabled={disableAdd}
					quantity={quantity}
				/>
				{product.quantity ? (
					<Button
						className='addToCart'
						textContent='add'
						disabled={disableAdd}
						onClick={() =>
							onClick(
								product,
								parseInt(desiredQuantity),
								setDisableAdd(true)
							)}
					/>
				) : (
					<p>Out of stock</p>
				)}
			</div>
		</div>
	);
}

export default ProductCard;
