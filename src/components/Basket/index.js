import CheckoutButton from '../Buttons/CheckoutButton';
import ProductInBasket from '../ProductInBasket';
import { basket } from './Basket.module.css';

function Basket({ cartItems, onRemoveAll, onRemoveOne, onAdd }) {
	return (
		<div className={`${basket} basket`}>
			<h2>Basket</h2>
			{cartItems &&
				cartItems.map((product, i) => (
					<ProductInBasket
						key={i}
						product={product}
						onRemoveAll={onRemoveAll}
						onRemoveOne={onRemoveOne}
						onAdd={onAdd}
					/>
				))}
			<CheckoutButton onClick={() => console.log(cartItems)} />
		</div>
	);
}

export default Basket;
