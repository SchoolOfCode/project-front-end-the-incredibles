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

export default basketReducer;
