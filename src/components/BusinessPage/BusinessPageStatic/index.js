import React from 'react';
import BusinessProfile from '../../BusinessProfile';
import ProductCardGrid from '../../ProductCardGrid';
import { container, profileContainer } from './BusinessPageStatic.module.css';

function BusinessPageStatic({ businessInfo, toggleCanEdit }) {
	return (
		<div className={container}>
			<div className={profileContainer}>
				<BusinessProfile
					businessInfo={businessInfo}
					editButton={{ onClick: toggleCanEdit }}
				/>
			</div>
			<ProductCardGrid products={businessInfo.products} />
		</div>
	);
}

export default BusinessPageStatic;
