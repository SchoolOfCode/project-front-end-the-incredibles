import React from 'react';
import useBasket from '../../hooks/useBasket';
import mockData from '../../libs/mockData.js';
import Basket from '../Basket';
import BusinessProfile from '../BusinessProfile';
import ProductCardGrid from '../ProductCardGrid';
import { container, profileContainer } from './CustomerPage.module.css';
import useGet from '../../hooks/useGet'

function CustomerPage({route}) {
	//calls the custom hook which is a useReducer hook that is used in several methods (i.e. onAdd, onRemoveAll etc)
	const { cartItems, onAdd, onRemoveAll, onRemoveOne } = useBasket();
	const {isLoading, data: businessInfo } = useGet(`store/pete-the-meat`)
	if(isLoading){
		return <div className={container}>Loading</div>
	}

	return (
		<div className={container}>
			{/* these are where all the methods are being handed down as props to the basket component */}
			
			<Basket
				cartItems={cartItems}
				onRemoveAll={onRemoveAll}
				onRemoveOne={onRemoveOne}
				onAdd={onAdd}
			/>
			<div className={profileContainer}>
				<BusinessProfile businessInfo={businessInfo} />
			</div>
			{/* products is an array in mockdata which is passed down as a prop to this componenet and can add using the onAdd method */}
			<ProductCardGrid products={businessInfo.products} onClick={onAdd}/>
		</div>
	);
}

export default CustomerPage;
