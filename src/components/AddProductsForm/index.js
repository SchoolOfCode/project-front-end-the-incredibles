import Button from '../Buttons/Button';
import Input from '../Inputs/Input';
import {
	addProductsForm,
	inputsContainer,
	smallInputs,
} from './AddProductsForm.module.css';

function AddProductsForm({ addProduct }) {
	return (
		<form className={addProductsForm}>
			<h2>Add Your Products:</h2>
			<div className={inputsContainer}>
				<Input
					type='text'
					labelText='Product Name:'
					id='productName'
					updateInfo={() => console.log()}
				/>
				<div className={smallInputs}>
					<Input
						type='text'
						labelText='Price:'
						id='price'
						updateInfo={() => console.log()}
					/>
					<Input
						type='number'
						labelText='Quantity:'
						id='inventoryQuantity'
						updateInfo={() => console.log()}
					/>
				</div>
			</div>
			<Button
				textContent='Add Product'
				onClick={(e) => {
					e.preventDefault();
					const newProd = e.target.form[0].value;
					const newQuant = e.target.form[2].value;
					const newPrice = e.target.form[1].value;
					addProduct(newProd, newQuant, newPrice);
				}}
			/>
		</form>
	);
}

export default AddProductsForm;
