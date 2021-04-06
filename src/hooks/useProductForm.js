

function useProductForm(products, setProducts, id) {
    //sets businessId to be used for add and update (avoids overwritng it later)
    const businessId = id;

	async function removeProduct(id) {
		console.log(id);
		setProducts(products.filter((product) => product.productId !== id));
		console.log(products);
		await fetch(
			`${process.env
				.REACT_APP_BACKEND_URL}/business/deletebyproduct/${id}`,
			{
				method  : 'DELETE',
				headers : { 'Content-Type': 'application/json' },
			}
		);
	}

	async function addProduct(product) {
		setProducts([
			...products,
			{
				...product,
			},
		]);

		await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/business/insertbyproduct`,
			{
				method  : 'POST',
				body    : JSON.stringify({
					...product,
					businessId : businessId,
				}),
				headers : { 'Content-Type': 'application/json' },
			}
		);
	}

	async function updateProduct(product) {
		await fetch(
			`${process.env
				.REACT_APP_BACKEND_URL}/business/updatebyproduct/${product.productId}`,
			{
				method  : 'PUT',
				body    : JSON.stringify({ ...product }),
				headers : { 'Content-Type': 'application/json' },
			}
		);
	}

	return {
		updateProduct,
		removeProduct,
		addProduct,
	};
}

export default useProductForm;
