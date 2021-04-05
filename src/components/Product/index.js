import { useState } from 'react';
import Button from '../Buttons/Button/index';
import Input from '../Inputs/Input';
import {
	currentProduct,
	currentProductForm,
	currentProductInfo,
} from './Product.module.css';

export default function Product({ product, removeProduct, deleteProduct }) {
	const [ canEditProduct, setCanEditProduct ] = useState(false);

	function toggleCanEdit() {
		setCanEditProduct(!canEditProduct);
	}

	async function editProduct(id) {
		await fetch(
			`${process.env
				.REACT_APP_BACKEND_URL}/business/updatebyproduct/${id}`,
			{
				method  : 'PUT',
				body    : JSON.stringify({ ...productData }),
				headers : { 'Content-Type': 'application/json' },
			}
		);
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
							editProduct(productData.productId);
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
						onClick={() => {
							removeProduct();
							deleteProduct(product.productId);
						}}
					/>
				</div>
			)}
		</li>
	);
}
