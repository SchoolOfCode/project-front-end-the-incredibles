import {  useState } from 'react';
import Product from '../Product/index';
import { currentProductsContainer } from './CurrentProductList.module.css';

function CurrentProductList({ products, removeProduct }) {
	const [productList, setProductList] = useState([...products]);


	async function deleteProduct(id) {
		setProductList(productList.filter(product => product.productId !== id))
		
		await fetch(
			`${process.env
				.REACT_APP_BACKEND_URL}/business/deletebyproduct/${id}`,
			{
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}

	return (
		<ul className={currentProductsContainer}>
			<h2>Current Products:</h2>
			{productList.map((product, i) => (
				<Product
					product={product}
					key={i}
					removeProduct={() => removeProduct(i)}
					deleteProduct={deleteProduct}
				/>
			))}
		</ul>
	);
}

export default CurrentProductList;
