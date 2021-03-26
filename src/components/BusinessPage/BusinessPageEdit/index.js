import React from 'react';
import PublishCartShopButton from '../../Buttons/PublishCartShopButton';
import RemoveProductButton from '../../Buttons/RemoveProductButton';
import Button from "../../Buttons/Button";
import Input from '../../Inputs/Input';
import {
	currentProduct,
	addProductsForm,
	businessInfoForm,
	container,
	currentProductsContainer
} from './BusinessPageEdit.module.css';

function BusinessPageEdit({ businessInfo, setBusinessInfo, toggleCanEdit }) {
	const { name, about, isTrading, products } = businessInfo;
	return (
		<div className={container}>
			<form className={businessInfoForm}>
				<Input
					type='text'
					labelText='Business Name:'
					id='business-name'
					updateInfo={'use reducer?'}
					currentInfo={name}
				/>
				<Input
					type='text'
					labelText='About The Business:'
					id='business-about'
					updateInfo={'use reducer?'}
					currentInfo={about}
				/>
				</form>
				<form className={addProductsForm}>
					<h2>Add Your Products</h2>
					<Input
						type='text'
						labelText='Product Name:'
						id='product-name'
						updateInfo={'how'}
					/>
					<Input />
					<Input
						type='text'
						labelText='Price:'
						id='product-price'
						updateInfo={'how'}
					/>
					<Input type='number'
						labelText='Quantity:'
						id='product-quantity'
						updateInfo={'how'}/>
						<Button textContent="Add Product" onClick={"should add product"}/>
				</form>
				<div className={currentProductsContainer}>
					<ul>
						{products.map((product, i) => <li key={i} className={currentProduct}>
							<span> {product.name}
								</span>
								<RemoveProductButton />
								</li>)}
					</ul>
				</div>
			<PublishCartShopButton
				onClick={
					toggleCanEdit
					//also needs to send to DB
				}
			/>
		</div>
	);
}

export default BusinessPageEdit;
