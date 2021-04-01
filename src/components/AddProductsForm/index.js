import { useState } from 'react';
import Blob from '../blob/src/Blob';
import Button from '../Buttons/Button';
import Input from '../Inputs/Input';
import {
	addProductsForm,
	inputsContainer,
	smallInputs,
} from './AddProductsForm.module.css';

function AddProductsForm({ addProduct }) {
	const [ productForm, setProductForm ] = useState({
		productImage : '',
		productName  : '',
		productPrice : null,
		quantity     : 1,
	});

	const updateBlob = (img) =>
		setProductForm({ ...productForm, productImage: img });

	return (
		<form className={addProductsForm}>
			<h2>Add Your Products:</h2>
			<div className={inputsContainer}>
				<Input
					type='text'
					labelText='Product Name:'
					id='productName'
					updateInfo={(e) =>
						setProductForm({
							...productForm,
							productName : e.target.value,
						})}
				/>
				<div className={smallInputs}>
					<Input
						type='text'
						labelText='Price:'
						id='price'
						updateInfo={(e) =>
							setProductForm({
								...productForm,
								productPrice : e.target.value,
							})}
					/>
					<Input
						type='number'
						labelText='Quantity:'
						id='inventoryQuantity'
						updateInfo={(e) =>
							setProductForm({
								...productForm,
								productQuantity : e.target.value,
							})}
					/>
					<Blob
						updateInfo={updateBlob}
						currentImage={productForm.productImage}
					/>
				</div>
			</div>
			<Button
				textContent='Add Product'
				onClick={(e) => {
					e.preventDefault();
					addProduct(productForm);
				}}
			/>
		</form>
	);
}

export default AddProductsForm;
