// ./src/App.tsx

import { Spinner } from '@chakra-ui/spinner';
import React, { useState } from 'react';
import Button from '../../Buttons/Button';
import uploadFileToBlob, { isStorageConfigured } from './azure-storage-blob.ts';

const storageConfigured = isStorageConfigured();

function Blob({ updateInfo, currentImage = '' }) {
	// all blobs in container
	// const [blobList, setBlobList] = useState(currentImage);

	// current file to upload into container
	const [ fileSelected, setFileSelected ] = useState(null);

	// UI/form management
	const [ uploading, setUploading ] = useState(false);
	const [ inputKey, setInputKey ] = useState(Math.random().toString(36));

	const onFileChange = (event) => {
		// capture file into state
		setFileSelected(event.target.files[0]);
	};

	const onFileUpload = async () => {
		// prepare UI
		setUploading(true);

		// *** UPLOAD TO AZURE STORAGE ***
		const blobsInContainer = await uploadFileToBlob(fileSelected);

		// prepare UI for results
		// setBlobList(blobsInContainer);

		// reset state/form
		setFileSelected(null);
		setUploading(false);
		setInputKey(Math.random().toString(36));

		//update state with img url
		updateInfo(blobsInContainer);
	};

	// display form
	const DisplayForm = () => (
		<div>
			<input type='file' onChange={onFileChange} key={inputKey || ''} />
			<Button
				className='upload'
				textContent={<span><i class="fas fa-upload"></i>Upload</span>}
				onClick={onFileUpload}
			/>
		</div>
	);

	// display file name and image
	const DisplayImagesFromContainer = () => (
		<div>
			<div>
				<p>Your Image:</p>
				<img src={currentImage} alt={currentImage} height='100' />
			</div>
		</div>
	);

	return (
		<div>
			{storageConfigured && !uploading && DisplayForm()}
			{storageConfigured && uploading && <Spinner color="#FF5A5F" size="l" />}
			<hr />
			{storageConfigured &&
				currentImage.length > 0 &&
				DisplayImagesFromContainer()}
			{!storageConfigured && <div>Storage is not configured.</div>}
		</div>
	);
}

export default Blob;
