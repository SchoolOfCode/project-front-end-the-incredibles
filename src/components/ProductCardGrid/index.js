import ProductCard from '../ProductCard';
import { cardContainer } from './ProductCardGrid.module.css';

function ProductCardGrid({ products }) {
	return (
		<div className={cardContainer}>
			{products.map((product, i) => (
				<ProductCard key={i} product={product} />
			))}
		</div>
	);
}

export default ProductCardGrid;
