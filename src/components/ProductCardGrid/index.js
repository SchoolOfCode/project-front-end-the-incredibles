import ProductCard from '../ProductCard';
import { cardContainer } from './ProductCardGrid.module.css';

function ProductCardGrid({ cartItems, onAdd }) {
	return (
		<div className={cardContainer}>
			{cartItems.map((product, i) => (
				<ProductCard key={i} product={product}  onAdd={onAdd}/>
			))}
		</div>
	);
}

export default ProductCardGrid;
