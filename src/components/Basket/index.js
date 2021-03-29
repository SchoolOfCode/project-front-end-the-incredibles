import Button from '../Buttons/Button';
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
			<Button classNames="blackBtn" textContent="Checkout" onClick={() => console.log(cartItems)} />
		</div>
	);
}

export default Basket;
