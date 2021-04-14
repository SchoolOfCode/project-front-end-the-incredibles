import nock from 'nock';
import mockBusiness from '../libs/mockData';
import useUpdateBusiness from './useUpdateBusiness';

describe('useUpdateBusiness', () => {
	afterEach(() => nock.cleanAll());
	let businessInfo = { ...mockBusiness };
	const setBusinessInfo = (newInfo) => (businessInfo = newInfo);

	const { updateData, updateBusiness } = useUpdateBusiness(
		businessInfo,
		setBusinessInfo
	);

	test('when given a value and a property, updateData updates the relative property in businessInfo', () => {
		//Arrange
		const expectedName = 'New Macrame Madness';
		const expectedIsTrading = true;

		//Act
		updateData(expectedIsTrading, 'isTrading');
		updateData(expectedName, 'businessName');

		//Assert
		expect(businessInfo.businessName).toBe(expectedName)
		expect(businessInfo.isTrading).toBe(expectedIsTrading)
	});

	test('updateBusiness calls API and updates data for the business', async () => {
		//Arrange
		nock.disableNetConnect();
		const scope = nock(process.env.REACT_APP_BACKEND_URL)
			//CORS
			.defaultReplyHeaders({
				'access-control-allow-origin'      : '*',
				'access-control-allow-credentials' : 'true',
			})
			.persist()
			.intercept(
				`/business/updatebybusiness/${businessInfo.id}`,
				'OPTIONS'
			)
			.reply(200, null)
			.put(`/business/updatebybusiness/${businessInfo.id}`)
			.reply(200, { ...businessInfo });

		//Act
		await updateBusiness();

		//Assert
		expect(scope.isDone()).toBe(true);
	});
});
