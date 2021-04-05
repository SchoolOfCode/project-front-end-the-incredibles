import { useState } from 'react';
import Button from '../Buttons/Button/index';
import Input from '../Inputs/Input';
import {
	currentProduct,
	currentProductForm,
	currentProductInfo,
} from './Product.module.css';

export default function Product({ product, removeProduct, updateProduct }) {
	const [ canEditProduct, setCanEditProduct ] = useState(false);
	function toggleCanEdit() {
		setCanEditProduct(!canEditProduct);
	}
	
	const [ productData, setProductData ] = useState({ ...product });
	

	function updateData(value, field) {
		setProductData({ ...productData, [field]: value });
	}

	return (
		<li className={currentProduct}>
      	<Button
				className='updateProductEdit'
				textContent={canEditProduct ? 'X' : "edit"}
				onClick={() => {
					toggleCanEdit();
				}}
			/>

			{canEditProduct ? (
				<div className={currentProductForm}>
					<Input
						type='text'
						labelText='Product Name:'
						id='productName'
						updateInfo={(e) =>
							updateData(e.target.value, 'productName')}
						currentInfo={productData.productName}
					/>
					<Input
						type='number'
						labelText='Product Price:'
						id='productPrice'
						updateInfo={(e) =>
							updateData(e.target.value, 'productPrice')}
						currentInfo={productData.productPrice}
					/>
					<Input
						type='number'
						labelText='Product Quantity:'
						id='quantity'
						updateInfo={(e) =>
							updateData(e.target.value, 'quantity')}
						currentInfo={productData.quantity}
					/>
					<Button
						className='submitProduct'
						textContent='submit'
						onClick={() => {
							updateProduct(productData);
							toggleCanEdit();
						}}
					/>
				</div>
			) : (
				<div className={currentProductInfo}>
					<span> {productData.productName}</span>
					<span> £{productData.productPrice}</span>
					<span> {productData.quantity}</span>
					<Button
						className='removeCurrentProduct'
						textContent='remove'
						onClick={removeProduct}
					/>
				</div>
			)}
		</li>
	);
}
