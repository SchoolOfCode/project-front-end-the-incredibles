import IsBusinessOpen from '../IsBusinessOpen';
import {
	businessAbout,
	businessImg,
	businessName,
	container,
	contentContainer,
} from './BusinessProfile.module.css';

function BusinessProfile({ businessInfo }) {
	//destructuring businessInfo object (which is our mockData) and displaying in on the page
	return (
		<div className={container}>
			<IsBusinessOpen isTrading={businessInfo.isTrading} />
			<div className={contentContainer}>
				<h2 className={businessName}>{businessInfo.businessName}</h2>
				<p className={businessAbout}>{businessInfo.businessAbout}</p>

				<img
					className={businessImg}
					src={businessInfo.businessImg.src}
					alt={businessInfo.businessImg.alt}
				/>
			</div>
		</div>
	);
}

export default BusinessProfile;
