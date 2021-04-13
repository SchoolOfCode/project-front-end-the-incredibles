// ./src/azure-storage-blob.ts

// <snippet_package>
// THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';

// THIS IS SAMPLE CODE ONLY - DON'T STORE TOKEN IN PRODUCTION CODE
const sasToken =
	process.env.storagesastoken ||
	'sv=2020-02-10&ss=b&srt=sco&sp=rwdlacx&se=2021-07-30T17:26:55Z&st=2021-04-13T09:26:55Z&spr=https,http&sig=0lM8dcZMT9biGJujwIGF17TTRZQSKjuExmQi8nhmBkg%3D'; // Fill string with your SAS token
const containerName = `tutorial-container`;
const storageAccountName =
	process.env.storageresourcename || 'cartshopblobchristina'; // Fill string with your Storage resource name
// </snippet_package>

// <snippet_isStorageConfigured>
// Feature flag - disable storage feature to app if not configured
export const isStorageConfigured = () => {
	return !storageAccountName || !sasToken ? false : true;
};
// </snippet_isStorageConfigured>

// <snippet_getBlobsInContainer>
// return list of blobs in container to display
// const getBlobsInContainer = async (containerClient: ContainerClient) => {
// 	const returnedBlobUrls: string[] = [];

// 	// get list of blobs in container
// 	// eslint-disable-next-line
// 	for await (const blob of containerClient.listBlobsFlat()) {
// 		// if image is public, just construct URL
// 		returnedBlobUrls.push(
// 			`https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
// 		);
// 	}
// 	console.log(returnedBlobUrls);

// 	return returnedBlobUrls;
// };
// </snippet_getBlobsInContainer>

// <snippet_createBlobInContainer>
const createBlobInContainer = async (
	containerClient: ContainerClient,
	file: File
) => {
	// create blobClient for container
	const blobClient = containerClient.getBlockBlobClient(file.name);

	// set mimetype as determined from browser with file upload control
	const options = { blobHTTPHeaders: { blobContentType: file.type } };

	// upload file
	let item = await blobClient.uploadBrowserData(file, options);
	let data = await item._response.request.url;
	console.log(`TESTING URL ${data}`);
	return data;
};
// </snippet_createBlobInContainer>

// <snippet_uploadFileToBlob>
const uploadFileToBlob = async (file: File | null): Promise<string> => {
	if (!file) return '';

	// get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
	const blobService = new BlobServiceClient(
		`https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
	);

	// get Container - full public read access
	const containerClient: ContainerClient = blobService.getContainerClient(
		containerName
	);
	await containerClient.createIfNotExists({
		access: 'container',
	});

	// upload file
	const createItem = await createBlobInContainer(containerClient, file);

	// get list of blobs in container
	return createItem;
};
// </snippet_uploadFileToBlob>

export default uploadFileToBlob;
