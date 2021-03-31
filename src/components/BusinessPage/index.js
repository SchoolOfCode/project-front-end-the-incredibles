import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import useGet from '../../hooks/useGet';
import BusinessPageEdit from './BusinessPageEdit';
import BusinessPageStatic from './BusinessPageStatic';

function BusinessPage() {
	const { user } = useAuth0();
	const [ canEdit, setCanEdit ] = useState(true);

	const [ businessInfo, setBusinessInfo ] = useGet(user.sub);
	console.log(businessInfo);

	// useGet("auth0|606198aac96e2800685cabff");
	// const [businessInfo, setBusinessInfo] = useState(mockData);

	console.log(`This is the users Auth0 ID: ${user.sub}`);
	//use this id to get access to DB.
	//
	function toggleCanEdit() {
		setCanEdit(!canEdit);
		console.log(canEdit);
	}
	console.log(businessInfo);
	return (
		businessInfo && (
			<div className={BusinessPage}>
				{businessInfo.businessName && (
					<p>
						your custom url is: `https://localhost:3000/stores/
						{businessInfo.businessName.replace(/ /g, '-')}`
					</p>
				)}
				{canEdit ? (
					<BusinessPageEdit
						businessInfo={businessInfo}
						toggleCanEdit={toggleCanEdit}
						setBusinessInfo={setBusinessInfo}
					/>
				) : (
					<BusinessPageStatic
						businessInfo={businessInfo}
						toggleCanEdit={toggleCanEdit}
					/>
				)}
			</div>
		)
	);
}
export default BusinessPage;
