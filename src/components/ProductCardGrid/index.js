import ProductCard from '../ProductCard';
import { cardContainer } from './ProductCardGrid.module.css';

function ProductCardGrid({ products, onAdd }) {
	return (
		<div className={cardContainer}>
			{products.map((product, i) => (
				<ProductCard key={i} product={product}  onAdd={onAdd}/>
			))}
		</div>
	);
}

export default ProductCardGrid;
