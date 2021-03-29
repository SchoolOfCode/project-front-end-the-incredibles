import IsBusinessOpen from '../IsBusinessOpen';
import {
	businessAbout,
	businessImg,
	businessName,
	container,
	contentContainer,
} from './BusinessProfile.module.css';

function BusinessProfile({ businessInfo }) {
	console.log(businessInfo)
	if(businessInfo){

		return (
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
			</div>
		);
	}else{return <p>loading</p>}
}

export default BusinessProfile;
