import {useState} from "react";

function useBasket() {
	const [ cartItems, setCartItems ] = useState([]);

	const onAdd = (product, quantity) => {
		const exist = cartItems.find(
			(cartProd) => cartProd.productId === product.productId
		);
		if (exist) {
			setCartItems(
				cartItems.map(
					(cartProd) =>
						cartProd.productId === product.productId
							? { ...exist, qty: exist.qty + 1 }
							: cartProd
				)
			);
		}
		else {
			setCartItems([ ...cartItems, { ...product, qty: 1 } ]);
		}
	};

	const onRemove = (product) => {
		const exist = cartItems.find(
			(cartProd) => cartProd.productId === product.productId
		);
		if (exist.qty === 1) {
			setCartItems(
				cartItems.filter(
					(cartProd) => cartProd.productId !== product.productId
				)
			);
		}
		else {
			setCartItems(
				cartItems.map(
					(cartProd) =>
						cartProd.productId === product.productId
							? { ...exist, qty: exist.qty - 1 }
							: cartProd
				)
			);
		}
	};

	return {
		cartItems : cartItems,
		onAdd     : onAdd,
		onRemove  : onRemove,
	};

}

export default useBasket;