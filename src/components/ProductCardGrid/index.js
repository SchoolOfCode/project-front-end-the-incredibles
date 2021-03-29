import ProductCard from '../ProductCard';
import { cardContainer } from './ProductCardGrid.module.css';

function ProductCardGrid({ products, onClick }) {
	return (
		<div className={cardContainer}>
			{products.map((product, i) => (
				<ProductCard key={i} product={product} onClick={onClick}/>
			))}
		</div>
	);
}

export default ProductCardGrid;
