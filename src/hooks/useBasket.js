import { useReducer } from 'react';

function basketReducer(state, action) {
	const { product, payload } = action;
	const id = product.productId;

	switch (action.type) {
		case 'REMOVE_ALL':
			return state.map(
				(currentProduct) =>
					currentProduct.productId === id
						? {
								...product,
								quantityInBasket : 0,
							}
						: currentProduct
			);
		case 'ADD':
			return state.map(
				(currentProduct) =>
					currentProduct.productId === id
						? {
								...product,
								quantityInBasket :
									product.quantityInBasket + payload,
							}
						: currentProduct
			);
		case 'REMOVE_1':
			return state.map(
				(currentProduct) =>
					currentProduct.productId === id
						? {
								...product,
								quantityInBasket : product.quantityInBasket - 1,
							}
						: currentProduct
			);
		default:
			return state;
	}
}

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
