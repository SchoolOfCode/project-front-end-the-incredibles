import ProductInBasket from '../ProductInBasket';
import Stripe from '../Stripe';
import { basket } from './Basket.module.css';

function Basket({ inBasket, onRemoveAll, onRemoveOne, onAdd }) {
	const total = inBasket.reduce((acc, curr) => {
		const price = curr.productPrice;
		const quantity = curr.quantityInBasket;
		const currTotal = price * quantity * 100;

		return acc + currTotal;
	}, 0.0);

	return (
		<div className={`${basket} basket`}>
			<h2>Basket</h2>
			{inBasket &&
				inBasket.map((product, i) => (
					<ProductInBasket
						key={i}
						product={product}
						onRemoveAll={() => onRemoveAll(product)}
						onRemoveOne={() => onRemoveOne(product)}
						onAdd={() => onAdd(product, 1)}
					/>
				))}
			<Stripe total={total} />
		</div>
	);
}

export default Basket;
