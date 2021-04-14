import { useReducer } from 'react';
import basketReducer from '../libs/basketReducer';

function useBasket(products) {
	const [ cartItems, dispatch ] = useReducer(basketReducer, products);

	const onAdd = (product, quantity) => {
		const inStock = product.quantityInBasket + quantity <= product.quantity;

		if (quantity > 0 && inStock) {
			dispatch({ type: 'ADD', payload: quantity, product });
		}
	};

	const onRemoveAll = (product) => {
		dispatch({ type: 'REMOVE_ALL', product });
	};

	const onRemoveOne = (product) => {
		product.quantityInBasket <= 1
			? dispatch({ type: 'REMOVE_ALL', product })
			: dispatch({ type: 'REMOVE_1', product });
	};

	return {
		cartItems   : cartItems,
		onAdd       : onAdd,
		onRemoveAll : onRemoveAll,
		onRemoveOne : onRemoveOne,
	};
}

export default useBasket;
