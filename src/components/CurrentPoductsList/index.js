import Product from '../Product/index';
import { currentProductsContainer } from './CurrentProductList.module.css';

function CurrentProductList({ products, removeProduct, updateProduct }) {

	return (
		<ul className={currentProductsContainer}>
			<h2>Current Products:</h2>
			{products.map((product, i) => (
				<Product
					product={product}
					key={i}
					removeProduct={() => removeProduct(product.productId)}
					updateProduct={updateProduct}
				/>
			))}
		</ul>
	);
}

export default CurrentProductList;
