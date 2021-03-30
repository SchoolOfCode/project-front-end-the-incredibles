import { useReducer } from 'react';

function basketReducer(state, action) {
	const { product, payload } = action;
	const id = product.productId;

	
	switch (action.type) {
		case 'ADD_FIRST':
			return [ ...state, { ...product, qty: action.payload } ];
		case 'REMOVE_ALL':
			return [ ...state.filter((currentProduct) => currentProduct.productId !== id) ];
		case 'ADD_REMOVE':
			return state.map(
				(currentProduct) =>
					currentProduct.productId === id
						? {
								...product,
								qty:
									product.qty +
									(payload ? payload : -1),
							}
						: currentProduct
			);
		default:
			return state;
	}
}

function useBasket() {
	const [ cartItems, dispatch ] = useReducer(basketReducer, []);
	
	const exist = (product) => cartItems.find(
				(cartProd) => cartProd.productId === product.productId
				);

	const onAdd = (product, quantity) => {
		if (quantity > 0) {

				exist(product) ?
				dispatch({ type: 'ADD_REMOVE', payload: quantity, product })
				:
				dispatch({ type: 'ADD_FIRST', payload: quantity, product });
				
			}
		};
		
		const onRemoveAll = (product) => {
			dispatch({ type: 'REMOVE_ALL', product });
		};
		
		const onRemoveOne = (product) => {			
				exist(product).qty <= 1 ?
				dispatch({ type: 'REMOVE_ALL', product })
				:
				dispatch({ type: 'ADD_REMOVE', product });
			};
			
			return {
				cartItems   : cartItems,
				onAdd       : onAdd,
				onRemoveAll : onRemoveAll,
				onRemoveOne : onRemoveOne,
			};
		}
		
		export default useBasket;
		
		// function useBasket() {
		// 	const [ cartItems, setCartItems ] = useState([]);
		
		// 	const onAdd = (product, quantity) => {
		// 		if (quantity > 0) {
		// 			const exist = cartItems.find(
		// 				(cartProd) => cartProd.productId === product.productId
		// 			);
		// 			if (exist) {
		// 				setCartItems(
		// 					cartItems.map(
		// 						(cartProd) =>
		// 							cartProd.productId === product.productId
		// 								? { ...exist, qty: exist.qty + quantity }
		// 								: cartProd
		// 					)
		// 				);
		// 			}
		// 			else {
		// 				setCartItems([ ...cartItems, { ...product, qty: quantity } ]);
		// 			}
		// 		}
		// 	};
		
		// 	const onRemoveAll = (product) => {
		// 		setCartItems(
		// 			cartItems.filter(
		// 				(cartProd) => cartProd.productId !== product.productId
		// 			)
		// 		);
		// 	};
		
		// 	const onRemoveOne = (product) => {
		// 		const exist = cartItems.find(
		// 			(cartProd) => cartProd.productId === product.productId
		// 		);
		// 		setCartItems(
		// 			cartItems.filter(
		// 				(cartProd) => cartProd.productId !== product.productId
		// 			)
		// 		);
		// 		if (exist.qty <= 1) {
		// 		}
		// 		else {
		// 			setCartItems(
		// 				cartItems.map(
		// 					(cartProd) =>
		// 						cartProd.productId === product.productId
		// 							? { ...exist, qty: exist.qty - 1 }
		// 							: cartProd
		// 				)
		// 			);
		// 		}
		// 	};
		
		// 	return {
		// 		cartItems   : cartItems,
		// 		onAdd       : onAdd,
		// 		onRemoveAll : onRemoveAll,
		// 		onRemoveOne : onRemoveOne,
		// 	};
		// }
		