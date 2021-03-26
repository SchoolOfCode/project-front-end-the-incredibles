import React from 'react';
import { container } from './BusinessPageEdit.module.css';
import PublishCartShopButton from "../../Buttons/PublishCartShopButton"
function BusinessPageEdit({ businessInfo, toggleCanEdit }) {
	const { name, about, isTrading, products } = businessInfo;
	return (
		<div className={container}>
			<p>HI</p>
            <PublishCartShopButton onClick={toggleCanEdit}/>
		</div>
	);
}

export default BusinessPageEdit;
