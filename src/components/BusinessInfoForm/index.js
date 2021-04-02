import Blob from '../blob/src/Blob';
import Input from '../Inputs/Input';
import IsTradingInput from '../Inputs/IsTradingInput';
import { businessInfoForm } from './BusinessInfoForm.module.css';

function BusinessInfoForm({ updateData, businessInfo }) {
	const { businessName, primaryEmail, isTrading } = businessInfo;

	const updateBlob = (blob) => {
		updateData(blob, 'businessLogo');
	};
	console.log(isTrading)
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
			<IsTradingInput
				updateIsTrading={(value) => updateData(value, 'isTrading')}
				currentValue={isTrading}
			/>
			<Blob
				updateInfo={updateBlob}
				currentImage={businessInfo.businessLogo}
			/>
		</form>
	);
}

export default BusinessInfoForm;
