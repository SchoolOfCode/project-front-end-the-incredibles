import nock from 'nock';
import mockBusiness from '../libs/mockData';
import useProductForm from './useProductForm';

describe('useProductForm', () => {
	afterEach(() => nock.cleanAll());

	let products = [ ...mockBusiness.products ];
    const length = products.length;
	const setProducts = (newProductList) => (products = newProductList);

	const { updateProduct, removeProduct, addProduct } = useProductForm(
		products,
		setProducts,
		mockBusiness.id
	);

	test('When given a product id, removeProduct calls the api and removes an item from the given products array.', async () => {
        //Arrange
		const productToDelete = products[0];
		const deletedId = productToDelete.productId;
        
        const expectedNewLength = length - 1;
		
        nock.disableNetConnect();
		const scope = nock(process.env.REACT_APP_BACKEND_URL)
			//CORS
			.defaultReplyHeaders({
				'access-control-allow-origin'      : '*',
				'access-control-allow-credentials' : 'true',
			})
			.persist()
			.intercept(`/business/deletebyproduct/${deletedId}`, 'OPTIONS')
			.reply(200, null)
			.delete(`/business/deletebyproduct/${deletedId}`)
			.reply(200, null);


		// //Act
		await removeProduct(deletedId);

		// //Assert
		expect(products).toHaveLength(expectedNewLength);

		expect(scope.isDone()).toBe(true);
	});

	test('When given a new product, addProduct calls the api and adds the item to the given products array.', async () => {
		//Arrange
		const productToAdd = {
            productName  : 'Blue Macramè',
			productPrice : 8.35,
			quantity     : 4,
        };
        const expectedNewLength = length + 1;

		nock.disableNetConnect();
		const scope = nock(process.env.REACT_APP_BACKEND_URL)
			//CORS
			.defaultReplyHeaders({
				'access-control-allow-origin'      : '*',
				'access-control-allow-credentials' : 'true',
			})
			.persist()
			.post("/business/insertbyproduct")
            .reply(201, {...productToAdd})


		// //Act
		await addProduct(productToAdd);

		// //Assert
		expect(products).toHaveLength(expectedNewLength);

		expect(scope.isDone()).toBe(true);
	});

    	test('When given an updated product, updateProduct calls the api to update the database.', async () => {
		//Arrange
		const updatedProduct = {
            ...products[1], productName: "New and Improved"
        };
        const expectedNewLength = length;

         nock.disableNetConnect();
		const scope = nock(process.env.REACT_APP_BACKEND_URL)
			//CORS
			.defaultReplyHeaders({
				'access-control-allow-origin'      : '*',
				'access-control-allow-credentials' : 'true',
			})
			.persist()
            .intercept(`/business/updatebyproduct/${updatedProduct.productId}`, 'OPTIONS')
			.reply(200, null)
			.put(`/business/updatebyproduct/${updatedProduct.productId}`)
            .reply(200, {...updatedProduct})


		// //Act
		await updateProduct(updatedProduct);
        
		// //Assert
		expect(scope.isDone()).toBe(true);
	});
});
