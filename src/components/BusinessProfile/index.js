import IsBusinessOpen from '../IsBusinessOpen';
import {
	businessAbout,
	businessImg,
	businessName,
	container,
	contentContainer,
} from './BusinessProfile.module.css';

function BusinessProfile({ businessInfo }) {
<<<<<<< HEAD
	// console.log(businessInfo)
	// console.log(`log from businessProfile ${businessInfo}`);
	
||||||| 53761db
=======
	//destructuring businessInfo object (which is our mockData) and displaying in on the page
>>>>>>> development
	return (
		
		<div>{businessInfo && 
		<div className={container}>
			<IsBusinessOpen isTrading={businessInfo.isTrading} />
			<div className={contentContainer}>
				<h2 className={businessName}>{businessInfo.businessName}</h2>
				<p className={businessAbout}>{businessInfo.primaryEmail}</p>

				<img
					className={businessImg}
					src={businessInfo.businessLogo}
					alt="BusinessLogo"
				/>
			</div>
		</div>}
		</div>
		);
	
}

export default BusinessProfile;
