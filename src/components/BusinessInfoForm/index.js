import Blob from '../blob/src/Blob';
import Input from '../Inputs/Input';
import { businessInfoForm } from './BusinessInfoForm.module.css';

function BusinessInfoForm({ updateData, businessInfo }) {
	const { businessName, primaryEmail } = businessInfo;

	const updateBlob = (blob) => {
		updateData(blob, 'businessLogo');
	};

	return (
		<form className={businessInfoForm}>
			<Input
				type='text'
				labelText='Business Name:'
				id='businessName'
				updateInfo={(e) => updateData(e.target.value, 'businessName')}
				currentInfo={businessName}
			/>
			<Input
				type='text'
				labelText='Email:'
				id='primaryEmail'
				updateInfo={(e) => updateData(e.target.value, 'primaryEmail')}
				currentInfo={primaryEmail}
			/>
			<Blob
				updateInfo={updateBlob}
				currentImage={businessInfo.businessLogo}
			/>
		</form>
	);
}

export default BusinessInfoForm;
