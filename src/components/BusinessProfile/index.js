import { container, businessImg, businessAbout, businessName } from './BusinessProfile.module.css';
import IsBusinessOpen from "../IsBusinessOpen"
function BusinessProfile({ name, about, img, isTrading }) {
	return (
		<div className={container}>
            <IsBusinessOpen isTrading={isTrading}/>
			<img className={businessImg} src={img.src} alt={img.alt} />
			<h2 className={businessName}>{name}</h2>
			<p className={businessAbout}>{about}</p>
		</div>
	);
}

export default BusinessProfile;
