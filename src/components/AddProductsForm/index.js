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
	const defaultProduct = {
		productImage : '',
		productName  : '',
		productPrice : 0.00,
		quantity     : 0,
	};
	const [ productForm, setProductForm ] = useState(defaultProduct);

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
					currentInfo={productForm.productName}
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
							currentInfo={productForm.productPrice}
					/>
					<Input
						type='number'
						labelText='Quantity:'
						id='inventoryQuantity'
						updateInfo={(e) =>
							setProductForm({
								...productForm,
								quantity : e.target.value,
							})}
							currentInfo={productForm.quantity}
					/>
					<Blob
						updateInfo={updateBlob}
						currentImage={productForm.productImage}
					/>
				</div>
			</div>
			<Button
				className='addProduct'
				textContent='Add Product'
				onClick={(e) => {
					e.preventDefault();
					addProduct(productForm);
					/*resets felids*/
					setProductForm(defaultProduct);
				}}
			/>
		</form>
	);
}

export default AddProductsForm;
