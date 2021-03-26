import { useState } from 'react';
import mockData from '../../libs/mockData';
import BusinessPageEdit from './BusinessPageEdit';
import BusinessPageStatic from './BusinessPageStatic';

function BusinessPage() {
	const [ canEdit, setCanEdit ] = useState(false);
    const [ businessInfo, setBusinessInfo] = useState(mockData);
    
	function toggleCanEdit() {
		setCanEdit(!canEdit);
		console.log(canEdit);
	}
    
	return (
		<div className={BusinessPage}>
			{canEdit ? (
				<BusinessPageEdit
					businessInfo={businessInfo}
					toggleCanEdit={toggleCanEdit}
					setBusinessIno={setBusinessInfo}
				/>
			) : (
				<BusinessPageStatic
					businessInfo={businessInfo}
					toggleCanEdit={toggleCanEdit}
				/>
			)}
		</div>
	);
}

export default BusinessPage;
